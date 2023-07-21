import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Seeker from "./Components/Seeker/Seekeer";
import JobsList from "./Components/JobList/JobsList";
import { Job } from "../../model/Job";
import Filters from "./Components/Filters/Filters";
import "./Jobs.styles.css";
import { Pagination } from "@mui/material";
import NoInfo from "../../Components/NoInfo";
import Loader from "./Components/Loader/Loader";
import Favourite from "./Components/Favourite/Favourite";
import JobsService from "../../services/Jobs.service";

interface Pagination {
  page: number;
  totalPages: number;
}

const JobsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [myJobs, setMyJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("search") ?? ""
  );

  const [pagination, setPagination] = useState<Pagination>({
    page: parseInt(searchParams.get("page") ?? "1"),
    totalPages: 1,
  });

  const getTrabajos = () => {
    setIsLoading(true);
    JobsService.GetJobs(searchQuery, pagination.page)
      .then((result) => {
        setMyJobs(result.jobs);
        setPagination((prev) => ({ ...prev, totalPages: result.totalPages }));
        setIsLoading(false);
      })
      .catch((e) => console.log("There was a mistake", e));
  };

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPagination((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
    getTrabajos();
    setSearchParams({ search: searchQuery, page: `${pagination.page}` });
  }, [searchQuery, pagination.page]);

  return (
    <>
      <Seeker
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPagination={setPagination}
      />
      <div className="jobs">
        <aside className="filter__container">
          <Favourite />
          <Filters />
        </aside>
        <main className="job-list__container">
          {!isLoading && myJobs.length !== 0 && <JobsList myJobs={myJobs} />}
          {!isLoading && myJobs.length === 0 && <NoInfo />}
          {isLoading && (
            <div className="loader">
              <Loader />
            </div>
          )}
          <div className="pagination__container">
            <Pagination
              className="pagination"
              count={pagination.totalPages}
              page={pagination.page}
              siblingCount={0}
              boundaryCount={1}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </main>
      </div>
    </>
  );
};
export default JobsPage;
