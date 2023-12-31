import { Job } from "../../../../../Model/Job";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./JobCard.styles.css";
import { JobImage } from "../../Jobs/JobImage/JobImage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

import { useFav } from "../../../../../Context/FavContext";

const JobCard = (job: Job) => {
  const fav = useFav();

  const handleButtonColor: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (fav.isFav(job)) {
      fav.removeFav(job);
    } else {
      fav.addFav(job);
    }
  };

  return (
    <>
      {job && (
        <div className="job-card">
          <div className="contenedor-img">
            <JobImage company={job.Company} />
          </div>
          <div className="info">
            <p className="company">
              <b>Company:</b> {job.Company}
            </p>
            <p className="title">
              <b>Job:</b> {job.Title}
            </p>
            <p className="date">
              <b>Post Date:</b>{" "}
              {`${job.PostDate.getDay()}/${
                job.PostDate.getMonth() + 1
              }/${job.PostDate.getFullYear()}`}
            </p>
          </div>
          <div className="buttons">
            <Link to={`${job.Slug}`} className="show-more">
              <IconButton color="primary" type="submit">
                <AddCircleIcon></AddCircleIcon>
              </IconButton>
              Show
            </Link>
            <button className="likeButton" onClick={handleButtonColor}>
              <StarIcon
                className="fav"
                style={{ color: fav.isFav(job) ? "gold" : "" }}
              />
              <p className="add-text">Favourite</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default JobCard;
