import { useState, useEffect } from "react";
import { useFetcher, useActionData } from "react-router-dom";
import axios from "axios";
import Buscador from "../Components/Buscador";
import JobsList from "../Components/JobsList";
import { Job } from "../Interfaces";
import Filtros from "../Components/Filtros";
import TrabajosService from "../services/trabajos.service";
import PendingIcon from "@mui/icons-material/Pending";
import "./HomeStyled.css";
import { Pagination } from "@mui/material";
import NoInfo from "../Components/NoInfo";

const Home = () => {
  // const jobs = useActionData();
  const [myJobs, setMyJobs] = useState<Job[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  const getTrabajos = () => {
    setIsLoading(true);
    TrabajosService.GetTrabajos(searchQuery, page)
      .then((result) => {
        setMyJobs(result.jobs);
        setTotalPages(result.totalPages);
        setIsLoading(false);
        setIsInitial(false);
        console.log(result.jobs);
      })
      .catch((e) => console.log("Hubo un error", e));
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getTrabajos();
  }, [searchQuery, page]);

  return (
    <>
      <Buscador setSearchQuery={setSearchQuery} />
      <div className="jobs">
        <aside className="filter__container">
          <Filtros />
        </aside>
        <main className="job-list__container">
          {!isLoading && myJobs.length !== 0 && <JobsList myJobs={myJobs} />}
          {!isLoading && !isInitial && myJobs.length === 0 && <NoInfo />}
          {isLoading && (
            <div className="loading">
              <PendingIcon fontSize="medium" color="primary"></PendingIcon>
              Loading...
            </div>
          )}
          <div className="pagination__container">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
