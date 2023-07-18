import { Job } from "../../../../model/Job";
import "./JobDetailStyle.css";

type JobDetailProps = { job: Job };

const JobDetail = ({ job }: JobDetailProps) => {
  return (
    <div className="detail">
      <h2 className="title-detail">{job.Title}</h2>
      <h3 className="company-detail">{job.Company}</h3>
      <div className="job-detail-company">
        {job.Image ? (
          <img className="image-detail-company" src={job.Image} />
        ) : (
          <img className="image-detail-company" src="GitHubIcon.jpg" />
        )}
      </div>
      <div
        className="info-detail"
        dangerouslySetInnerHTML={{ __html: job.Description }}
      ></div>
    </div>
  );
};

export default JobDetail;
