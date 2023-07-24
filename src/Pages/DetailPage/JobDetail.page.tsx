import { useParams } from "react-router-dom";
import JobsService from "../../Services/Jobs.service";
import { Job } from "../../Model/Job";
import { useEffect, useState } from "react";
import JobDetail from "./Components/JobDetail/JobDetail";
import "./JobDetail.styles.css";
import JobDetailAside from "./Components/JobDetailAside/JobDetailAside";

export const JobDetailPage = () => {
  const { idJob } = useParams();
  const [job, setJob] = useState<Job>();
  function getJob() {
    JobsService.GetJobsById(idJob ?? "")
      .then((result) => {
        setJob(result);
      })
      .catch((e) => console.log("There was a mistake", e));
  }
  useEffect(() => {
    getJob();
  }, [idJob]);

  return (
    <div className="job-detail">
      {job && (
        <>
          <JobDetailAside job={job} />
          <main>
            <JobDetail job={job} />
          </main>
        </>
      )}
    </div>
  );
};
