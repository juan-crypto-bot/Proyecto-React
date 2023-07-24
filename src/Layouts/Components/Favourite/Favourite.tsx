import { Button, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import "./Favourite.styles.css";
import StarIcon from "@mui/icons-material/Star";
import { useFav } from "../../../Context/FavContext";
import JobsList from "../../../Pages/JobsPage/Components/JobList/JobsList";

function Favourite() {
  const [modal, setModal] = useState(false);
  const fav = useFav();
  const opencloseModal = () => {
    setModal(!modal);
  };
  const body = (
    <div className="list">
      <div className="list-content">
        {fav.favJobs.length === 0 ?<p className="no-job-text">No jobs selected</p>:<JobsList myJobs={fav.favJobs} />}
      <Button className="close-button" color="primary" onClick={() => opencloseModal()}>
        CLOSE
      </Button>
      </div>
    </div>
  );

  return (
    <div>
      <IconButton color="primary" type="submit" className="fav-button" onClick={() => opencloseModal()}>
        <StarIcon />
        <p className="fav-button-text">FAVOURITE JOBS</p>
      </IconButton>
      <div className="modal">
        <Modal open={modal} onClose={opencloseModal} >
          {body}
        </Modal>
      </div>
    </div>
  );
}
export default Favourite;
