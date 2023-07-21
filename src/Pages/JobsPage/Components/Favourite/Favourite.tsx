import { Button, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import "./Favourite.style.css";
import StarIcon from "@mui/icons-material/Star";
import JobsList from "../JobList/JobsList";
import { useFav } from "../../../../context/FavContext";

function Favourite() {
  const [modal, setModal] = useState(false);
  const fav = useFav();
  const opencloseModal = () => {
    setModal(!modal);
  };
  const body = (
    <div className="list">
      <JobsList myJobs={fav.favJobs} />
      <p>FALTA IMPLEMENTAR. VUELVA PRONTO!!</p>
      <Button color="primary" onClick={() => opencloseModal()}>
        CLOSE
      </Button>
    </div>
  );

  return (
    <div>
      <IconButton color="primary" type="submit">
        <StarIcon />
        <Button onClick={() => opencloseModal()}>FAVOURITE JOBS</Button>
      </IconButton>
      <div className="modal">
        <Modal open={modal} onClose={opencloseModal}>
          {body}
        </Modal>
      </div>
    </div>
  );
}
export default Favourite;
