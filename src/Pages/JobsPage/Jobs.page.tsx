import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Seeker from "./Components/Seeker/Seekeer";
import { Job } from "../../Model/Job";
import "./Jobs.styles.css";
import { Pagination } from "@mui/material";
import NoInfo from "../../Components/NoInfo";
import Loader from "./Components/Loader/Loader";
import JobsService from "../../Services/Jobs.service";
import Favourite from "./Components/Favourite/Favourite";
import JobGrid from "./Components/JobGrid/JobGrid";
import JobsList from "./Components/JobList/JobsList";
import { FavProvider } from "../../Context/FavContext";

interface Pagination {
  page: number;
  totalPages: number;
  pageSize: number;
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
    pageSize: 10,
  });

  const getTrabajos = () => {
    setIsLoading(true);
    JobsService.GetJobs(searchQuery, pagination.page, pagination.pageSize)
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
    const handleWindowResize = () => {
      if (window.innerWidth >= 1500) {
        return setPagination((prev) => ({ ...prev, pageSize: 15 }));
      }
      if (window.innerWidth >= 1120) {
        return setPagination((prev) => ({ ...prev, pageSize: 12 }));
      }
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    getTrabajos();
    setSearchParams({ search: searchQuery, page: `${pagination.page}` });
  }, [searchQuery, pagination.page, pagination.pageSize]);

  return (
    <FavProvider>
      <>
        <Seeker
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPagination={setPagination}
        />
        <div className="jobs">
          <div className="favourite">
            <Favourite />
          </div>
          <main className="job-list__container">
            {!isLoading && myJobs.length !== 0 && <JobGrid myJobs={myJobs} />}
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
    </FavProvider>
  );
};
export default JobsPage;
