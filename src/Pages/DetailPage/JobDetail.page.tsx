import { useParams } from "react-router-dom";
import TrabajosService from "../../services/trabajos.service";
import { Job } from "../../model/Job";
import { useEffect, useState } from "react";
import JobDetail from "./Components/JobDetail/JobDetail";
import "./JobDetail.styles.css";
import JobDetailAside from "./Components/JobDetailAside/JobDetailAside";

export const JobDetailPage = () => {
  const { idJob } = useParams();
  const [job, setJob] = useState<Job>();
  function getTrabajo() {
    TrabajosService.GetTrabajoById(idJob ?? "")
      .then((result) => {
        setJob(result);
      })
      .catch((e) => console.log("Hubo un error", e));
  }
  useEffect(() => {
    getTrabajo();
  }, [idJob]);

  return (
    <div className="job-detail">
      <JobDetailAside />
      <main>{job && <JobDetail job={job} />}</main>
    </div>
  );
};