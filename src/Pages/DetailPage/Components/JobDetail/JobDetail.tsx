import { Job } from "../../../../model/Job";
import { JobImage } from "../../../JobsPage/Components/JobImage/JobImage";
import "./JobDetailStyle.css";

type JobDetailProps = { job: Job };

const JobDetail = ({ job }: JobDetailProps) => {
  return (
    <div className="detail">
      <h2 className="title-detail">{job.Title}</h2>
      <h3 className="company-detail">{job.Company}</h3>
      <div className="job-detail-company">
        <JobImage company={job.Company} />
      </div>
      <div
        className="info-detail"
        dangerouslySetInnerHTML={{ __html: job.Description }}
      ></div>
    </div>
  );
};

export default JobDetail;
