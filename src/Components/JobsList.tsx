import React, { useEffect } from "react";
import { Job } from "../Interfaces";
import LogosService from "../services/Logos.service";
import JobCard from "./JobCard";
import "./Styled/JobListStyle.css";

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
