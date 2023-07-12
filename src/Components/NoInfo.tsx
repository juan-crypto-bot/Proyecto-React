import React from "react";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./Styled/NoInfoStyle.css";

function NoInfo() {
  const url = useLocation();

  return (
    <>
      <Alert severity="error" style={{ maxWidth: 752, margin: "2rem auto 0" }}>
        <AlertTitle>Error</AlertTitle>
        <p>Datos no encontrados.</p>
      </Alert>
      <div style={{ margin: "1rem auto", textAlign: "center" }}>
        <Link to="/home" className="volver">
          {/* <IconButton color="primary">
            <HomeIcon></HomeIcon>
          </IconButton> */}
          Volver al inicio
        </Link>
      </div>
    </>
  );
}

export default NoInfo;
