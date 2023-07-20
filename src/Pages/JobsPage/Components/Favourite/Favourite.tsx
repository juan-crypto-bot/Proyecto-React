import { Button, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import "./Favourite.style.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

function Favourite() {
  const [modal, setModal] = useState(false);

  const abrircerrarModal = () => {
    setModal(!modal);
  };
  const body = (
    <div className="list">
      <p>HOLA</p>
      <Button>Cerrar</Button>
    </div>
  );

  return (
    <div>
      <IconButton color="primary" type="submit">
        <WorkOutlineIcon />
      </IconButton>
      <Button onClick={() => abrircerrarModal()}>FAVOURITE JOBS</Button>
      <div className="Fav">
        <Modal open={modal} onClose={abrircerrarModal}>
          {body}
        </Modal>
      </div>
    </div>
  );
}
export default Favourite;
