import React from "react";
import { Job } from "../Interfaces";

type JobDetailProps = { job: Job };

const JobDetail = ({ job }: JobDetailProps) => {
  return (
    <>
      <h2 >{job.Title}</h2>
      <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
    </>
  );
};

export default JobDetail;
