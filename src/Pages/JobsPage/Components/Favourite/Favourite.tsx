import { Button, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import "./Favourite.style.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

function Favourite() {
  const [modal, setModal] = useState(false);

  const opencloseModal = () => {
    setModal(!modal);
  };
  const body = (
    <div className="list">
      <p>JUNA KAPO</p>
      <Button color="primary" onClick={()=>opencloseModal()}>CLOSE</Button>
    </div>
  );

  return (
    <div>
      <IconButton color="primary" type="submit">
        <WorkOutlineIcon />
        <Button onClick={() => opencloseModal()}>FAVOURITE JOBS</Button>
      </IconButton>
      <div className="Fav">
        <Modal open={modal} onClose={opencloseModal}>
          {body}
        </Modal>
      </div>
    </div>
  );
}
export default Favourite;
