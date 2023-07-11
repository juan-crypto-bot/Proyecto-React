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

const Home = () => {
  // const jobs = useActionData();
  const [myJobs, setMyJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const getTrabajos = () => {
    setIsLoading(true);
    TrabajosService.GetTrabajos(searchQuery)
      .then((trabajos) => {
        setMyJobs(trabajos);
        setIsLoading(false);
      })
      .catch((e) => console.log("Hubo un error", e));
  };

  useEffect(() => {
    getTrabajos();
  }, [searchQuery]);

  console.log(myJobs);

  return (
    <>
      <Buscador setSearchQuery={setSearchQuery} />
      <div className="jobs">
        <aside className="filter__container">
          <Filtros />
        </aside>
        <main className="job-list__container">
          {!isLoading && myJobs.length !== 0 ? (
            <JobsList myJobs={myJobs} />
          ) : (
            <div className="loading">
              <PendingIcon fontSize="medium" color="primary"></PendingIcon>
              Loading...
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
