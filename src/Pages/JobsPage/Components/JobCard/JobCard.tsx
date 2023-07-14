import { Job } from "../../../../model/Job";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./JobCard.styles.css";

const JobCard = (job: Job) => {
  return (
    <div className="job-card">
      {job.Image ? (
        <img className="image" src={job.Image} />
      ) : (
        <img className="image" src="GitHubIcon.jpg" />
      )}
      <div className="info">
        <p className="company">Empresa: {job.Company}</p>
        <p className="title">Puesto: {job.Title}</p>
        <p className="date">
          Fecha de publicación: {job.PostDate.toISOString()}
        </p>
      </div>
      <Link to={`${job.Slug}`} className="boton">
        <IconButton color="primary" type="submit">
          <AddCircleIcon></AddCircleIcon>
        </IconButton>
        Ver más
      </Link>
    </div>
  );
};
export default JobCard;
