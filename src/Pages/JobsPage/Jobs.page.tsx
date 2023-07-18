import { useState, useEffect } from "react";
import Buscador from "./Components/Buscador/Buscador";
import JobsList from "./Components/JobList/JobsList";
import { Job } from "../../model/Job";
import Filtros from "./Components/Filtros/Filtros";
import TrabajosService from "../../services/trabajos.service";
import "./Jobs.styles.css";
import { Pagination } from "@mui/material";
import NoInfo from "../../Components/NoInfo";
import Loader from "./Components/Loader/Loader";

interface Pagination {
  page: number;
  totalPages: number;
}

const JobsPage = () => {
  const [myJobs, setMyJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    totalPages: 1,
  });

  const getTrabajos = () => {
    setIsLoading(true);
    TrabajosService.GetTrabajos(searchQuery, pagination.page)
      .then((result) => {
        setMyJobs(result.jobs);
        setPagination((prev) => ({ ...prev, totalPages: result.totalPages }));
        setIsLoading(false);
        console.log(result.jobs);
      })
      .catch((e) => console.log("Hubo un error", e));
  };

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPagination((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
    getTrabajos();
    console.log(searchQuery);
  }, [searchQuery, pagination.page]);

  return (
    <>
      <Buscador setSearchQuery={setSearchQuery} setPagination={setPagination} />
      <div className="jobs">
        <aside className="filter__container">
          <Filtros setDate={setDate} />
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
              className="paginacion"
              count={pagination.totalPages}
              page={pagination.page}
              /* boundaryCount={1} */
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
