import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./JobDetailAside.styles.css";

const JobDetailAside = () => {
  return (
    <div className="aside">
      <div className="back">
        <ArrowBackIcon className="arrow" color="primary"></ArrowBackIcon>
        <Link to="/" className="text">
          Back to search
        </Link>
      </div>
      <h3 className="apply">HOW TO APPLY</h3>
      <p className="contacto">
        Please email a copy of your resume and online portfolio to
        <Link to="" className="mail">
          {" "}
          wes@kasista.com
        </Link>{" "}
        & CC
        <Link to="" className="mail">
          {" "}
          eric@kasista.com
        </Link>
      </p>
    </div>
  );
};

export default JobDetailAside;
