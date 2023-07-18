import { Alert, AlertTitle, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Error404 = () => {
  const url = useLocation();

  return (
    <>
      <Alert severity="error" style={{ maxWidth: 752, margin: "2rem auto 0" }}>
        <AlertTitle>Error 404</AlertTitle>
        <p>
          Resource{" "}
          <b>
            <i>{url.pathname}</i>
          </b>{" "}
          not found.
        </p>
      </Alert>
      <div style={{ margin: "1rem auto", textAlign: "center" }}>
        <Link to="/">
          <IconButton color="primary">
            <HomeIcon></HomeIcon>
          </IconButton>
        </Link>
      </div>
    </>
  );
};
export default Error404;
