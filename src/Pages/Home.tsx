import { useState, useEffect } from "react";
import { useFetcher, useActionData } from "react-router-dom";
import axios from "axios";
import Buscador from "../Components/Buscador";
import JobsList from "../Components/JobsList";
import { Job } from "../Interfaces";
import Filtros from "../Components/Filtros";
import TrabajosService from "../services/trabajos.service";
import "../Components/Styled/HomeStyled.css";
import Footer from "../Components/Footer";

const Home = () => {
  // const jobs = useActionData();
  const [myJobs, setMyJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState(false);

  const getTrabajos = () => {
    TrabajosService.GetTrabajos(searchQuery)
      .then((trabajos) => {
        setMyJobs(trabajos);
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
        <Filtros />
        <JobsList myJobs={myJobs} />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
