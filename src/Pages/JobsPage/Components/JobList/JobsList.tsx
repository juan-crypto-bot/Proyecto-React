import { Job } from "../../../../Model/Job";
import JobCard from "../JobCard/JobCard";
import "./JobList.styles.css";

interface JobsListProps {
  myJobs: Job[];
}

const JobsList = ({ myJobs }: JobsListProps) => {
  return (
    <div className="job-list">
      {myJobs.map((job: Job) => (
        <JobCard key={job.Slug} {...job} />
      ))}
    </div>
  );
};
export default JobsList;
