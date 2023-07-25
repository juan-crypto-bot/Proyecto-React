import { Job } from "../../../../Model/Job";
import JobCardGrid from "../JobCardGrid/JobCardGrid";

interface JobsListProps {
  myJobs: Job[];
}

const JobGrid = ({ myJobs }: JobsListProps) => {
  return (
    <div className="job-list">
      {myJobs.map((job: Job) => (
        <JobCardGrid {...job} />
      ))}
    </div>
  );
};
export default JobGrid;
