import { Link, useNavigate } from "react-router-dom";
import "./JobDetailAside.styles.css";
import { Job } from "../../../../Model/Job";
import { Button } from "@mui/material";

type JobDetailProps = { job: Job };

const JobDetailAside = ({ job }: JobDetailProps) => {
  const navigate = useNavigate();
  function handleBackButtonClick() {
    navigate(-1);
  }

  return (
    <div className="aside">
      <Button className="back" onClick={handleBackButtonClick}>
        Back to search
      </Button>
      <a href={job.Url} className="show">
        Show employment
      </a>
    </div>
  );
};

export default JobDetailAside;
