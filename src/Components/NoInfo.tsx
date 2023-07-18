import { Alert, AlertTitle } from "@mui/material";

function NoInfo() {
  return (
    <Alert severity="error" style={{ maxWidth: 752, margin: "2rem auto 0" }}>
      <AlertTitle>Error</AlertTitle>
      <p>Data not found.</p>
    </Alert>
  );
}

export default NoInfo;
