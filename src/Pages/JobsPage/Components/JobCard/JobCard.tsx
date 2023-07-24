import { Job } from "../../../../Model/Job";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./JobCard.styles.css";
import { JobImage } from "../JobImage/JobImage";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useFav } from "../../../../Context/FavContext";

const JobCard = (job: Job) => {
  const fav = useFav();

  const handleButtonColor: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    fav.handleFav(job);
  };

  return (
    <>
      {job && (
        <div className="job-card">
          <div className="contenedor-img">
            <JobImage company={job.Company} />
          </div>
          <div className="info">
            <p className="company">Company: {job.Company}</p>
            <p className="title">Job: {job.Title}</p>
            <p className="date">Post Date: {}</p>
          </div>
          <button className="likeButton" onClick={handleButtonColor}>
            <FavoriteIcon
              className="fav"
              style={{ color: fav.isFav(job) !== -1 ? "red" : "" }}
            />
          </button>
          <Link to={`${job.Slug}`} className="boton">
            <IconButton color="primary" type="submit">
              <AddCircleIcon></AddCircleIcon>
            </IconButton>
            Show more
          </Link>
        </div>
      )}
    </>
  );
};
export default JobCard;
