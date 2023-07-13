import React from "react";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import "./Styled/NoInfoStyle.css";



function NoInfo({ handleBackToHome }:) {
  const url = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Alert severity="error" style={{ maxWidth: 752, margin: "2rem auto 0" }}>
        <AlertTitle>Error</AlertTitle>
        <p>Datos no encontrados.</p>
      </Alert>
      <div style={{ margin: "1rem auto", textAlign: "center" }}>
        <button onClick={handleBackToHome} className="volver">
          <p className="volvertext">Volver al inicio</p>
        </button>
      </div>
    </>
  );
}

export default NoInfo;
