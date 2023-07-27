import { Job } from "../../../../Model/Job";
import { JobImage } from "../../../JobsPage/Components/Jobs/JobImage/JobImage";
import "./JobDetail.styles.css";

type JobDetailProps = { job: Job };

const JobDetail = ({ job }: JobDetailProps) => {
  return (
    <div className="detail">
      <h1 className="title-detail">{job.Title}</h1>
      <h1 className="company-detail">{job.Company}</h1>
      <div className="job-detail-company">
        <JobImage company={job.Company} />
      </div>
      <div
        className="info-detail"
        dangerouslySetInnerHTML={{ __html: job.Description }} //revisar ¿¿porque se usa??
      ></div>
    </div>
  );
};

export default JobDetail;
