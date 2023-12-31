import { Link, useNavigate } from "react-router-dom";
import "./JobDetailAside.styles.css";
import { Job } from "../../../../Model/Job";

type JobDetailProps = { job: Job };

const JobDetailAside = ({ job }: JobDetailProps) => {
  const navigate = useNavigate();
  function handleBackButtonClick() {
    navigate(-1);
  }

  return (
    <div className="aside">
      <button className="back" onClick={handleBackButtonClick}>
        Back to search
      </button>
      <Link to={job.Url} className="show">
        Show employment
      </Link>
    </div>
  );
};

export default JobDetailAside;
