import { Link, useParams } from "react-router-dom";
import TrabajosService from "../services/trabajos.service";
import { Job } from "../Interfaces";
import { useEffect, useState } from "react";
import JobDetail from "../Components/JobDetail";
import "./DetailStyle.css";

export const Detail = () => {
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
      <aside>
        <Link to="/">Back to search</Link>
      </aside>
      <main>{job && <JobDetail job={job} />}</main>
    </div>
  );
};
