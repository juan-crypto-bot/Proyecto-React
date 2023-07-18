import React from "react";
import { Job } from "../model/Job";
import LogosService from "../services/Logos.service";

const JobAdapter = (result: any) => {
  const job = {
    Image: "",
    Title: result.data.title,
    Company: result.data.company,
    Location: result.data.location,
    PostDate: new Date(result.data.dateAdded),
    Slug: result.data.slug,
    Url: result.data.url,
    Description: result.data.originalPosting,
  };
  return job;
};

export default JobAdapter;
