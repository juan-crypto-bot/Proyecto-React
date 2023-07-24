import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link , useNavigate} from "react-router-dom";
import "./JobDetailAside.styles.css";
import { Job } from "../../../../Model/Job";


type JobDetailProps = { job: Job };

const JobDetailAside = ({ job }: JobDetailProps) => {
const navigate = useNavigate()
  function handleBackButtonClick(){
    navigate(-1);
  }
  
  return (
    <div className="aside">
      <div className="back">
        <ArrowBackIcon className="arrow" color="primary"></ArrowBackIcon>
        <button className="text" onClick={handleBackButtonClick}>
          Back to search
        </button>
      </div>
      <a href={job.Url} className="job-buttom">
        Show employment
      </a>
    </div>
  );
};

export default JobDetailAside;
