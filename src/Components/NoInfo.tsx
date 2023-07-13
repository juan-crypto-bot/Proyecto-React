import { Alert, AlertTitle } from "@mui/material";
import "./Styles/NoInfoStyle.css";

function NoInfo() {
  return (
    <Alert severity="error" style={{ maxWidth: 752, margin: "2rem auto 0" }}>
      <AlertTitle>Error</AlertTitle>
      <p>Datos no encontrados.</p>
    </Alert>
  );
}

export default NoInfo;
