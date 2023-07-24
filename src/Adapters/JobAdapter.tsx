import { Job } from "../Model/Job";

const JobAdapter = (result: any) => {
  const apiJobs: any[] = result.data.data;
  const jobs: Job[] = apiJobs.map((apiJob) => {
    const arrayDate = apiJob.postDate.split(" ")[0].split("/");
    return {
      Title: apiJob.title,
      Company: apiJob.company,
      PostDate: new Date(arrayDate[2], arrayDate[1], arrayDate[0]),
      Slug: apiJob.slug,
      Url: apiJob.url,
      Description: "",
    };
  });
  return jobs;
};

export default JobAdapter;
