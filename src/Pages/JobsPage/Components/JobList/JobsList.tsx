import { Job } from "../../../../model/Job";
import JobCard from "../JobCard/JobCard";
import "./JobList.styles.css";

interface JobsListProps {
  myJobs: Job[];
}

const JobsList = ({ myJobs }: JobsListProps) => {
  return (
    <div className="job-list">
      {myJobs.map((job: Job) => (
        <JobCard {...job} />
      ))}
    </div>
  );
};
export default JobsList;