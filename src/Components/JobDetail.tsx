import React from "react";
import { Job } from "../Interfaces";
import "./Styled/JobDetailStyle.css";

type JobDetailProps = { job: Job };

const JobDetail = ({ job }: JobDetailProps) => {
  return (
    <div className="detail">
      <h2 className="titulo">{job.Title}</h2>
      <div className="job-detail-company">
        {job.Image ? (
          <img className="image-detail-company" src={job.Image} />
        ) : (
          <img className="image-detail-company" src="" />
        )}
        <h3 className="company-detail">{job.Company}</h3>
      </div>
      <div
        className="info-detail"
        dangerouslySetInnerHTML={{ __html: job.description }}
      ></div>
    </div>
  );
};

export default JobDetail;
