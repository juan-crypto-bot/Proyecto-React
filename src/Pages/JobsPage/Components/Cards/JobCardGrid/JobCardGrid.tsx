import { Job } from "../../../../../Model/Job";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { JobImage } from "../../Jobs/JobImage/JobImage";
import StarIcon from "@mui/icons-material/Star";
import { useFav } from "../../../../../Context/FavContext";
import "./JobCardGrid.styles.css";

const JobCardGrid = (job: Job) => {
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
        <div className="job-card-grid">
          <div className="contenedor-img-grid">
            <JobImage company={job.Company} />
          </div>
          <div className="info-grid">
            <p className="company-grid">
              <b>Company:</b> {job.Company}
            </p>
            <p className="title-grid">
              <b>Job:</b> {job.Title}
            </p>
            <p className="date-grid">
              <b>Post Date:</b>{" "}
              {`${job.PostDate.getDay()}/${
                job.PostDate.getMonth() + 1
              }/${job.PostDate.getFullYear()}`}
            </p>
          </div>
          <div className="buttons-grid">
            <Link to={`${job.Slug}`} className="show-more-grid">
              <IconButton color="primary" type="submit">
                <AddCircleIcon></AddCircleIcon>
              </IconButton>
              Show
            </Link>
            <button className="likeButton" onClick={handleButtonColor}>
              <StarIcon
                className="fav-grid"
                style={{ color: fav.isFav(job) ? "gold" : "" }}
              />
              <p className="add-text-grid">Favourite</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default JobCardGrid;
