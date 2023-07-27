import { Job } from "../../../../../Model/Job";
import JobCardGrid from "../../Cards/JobCardGrid/JobCardGrid";
import "./JobGrid.styles.css";

interface JobsListProps {
  myJobs: Job[];
}

const JobGrid = ({ myJobs }: JobsListProps) => {
  return (
    <div className="job-grid">
      {myJobs.map((job: Job) => (
        <JobCardGrid key={job.Slug} {...job} />
      ))}
    </div>
  );
};
export default JobGrid;
