import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./JobDetailAside.styles.css";
import { Job } from "../../../../model/Job";

type JobDetailProps = { job: Job };

const JobDetailAside = ({ job }: JobDetailProps) => {
  console.log(job);
  return (
    <div className="aside">
      <div className="back">
        <ArrowBackIcon className="arrow" color="primary"></ArrowBackIcon>
        <Link to="/" className="text">
          Back to search
        </Link>
      </div>
      <a href={job.Url} className="job-buttom">
        Show employment
      </a>
    </div>
  );
};

export default JobDetailAside;
