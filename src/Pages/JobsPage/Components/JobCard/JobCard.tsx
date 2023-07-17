import { Job } from "../../../../model/Job";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./JobCard.styles.css";

const JobCard = (job: Job) => {
  return (
    <div className="job-card">
      <div className="contenedor-img">
        {job.Image ? (
          <img className="image" src={job.Image} />
        ) : (
          <img className="image" src="GitHubIcon.jpg" />
        )}
      </div>
      <div className="info">
        <p className="company">Company: {job.Company}</p>
        <p className="title">Job: {job.Title}</p>
        <p className="date">
          Post Date: {job.PostDate.toDateString()}
        </p>
      </div>
      <Link to={`${job.Slug}`} className="boton">
        <IconButton color="primary" type="submit">
          <AddCircleIcon></AddCircleIcon>
        </IconButton>
        Show more
      </Link>
    </div>
  );
};
export default JobCard;
