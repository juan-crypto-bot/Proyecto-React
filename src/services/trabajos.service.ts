import axios from "axios";
import { Job } from "../Interfaces";

const TrabajosService = {
  GetTrabajos: (busqueda: string): Promise<Job[]> => {
    return new Promise<Job[]>((resolve, reject) => {
      axios
        .get("https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search", {
          params: {
            SearchQuery: `dev + ${busqueda}`,
          },
          headers: {
            "X-RapidAPI-Key":
              "b5c88dc99cmshe9441e41e8c805ap120231jsn7b7200c615ce",
            "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
          },
        })
        .then((result) => {
          const apiJobs: any[] = result.data.data;
          const jobs: Job[] = apiJobs.map((apiJob) => ({
            Title: apiJob.title,
            Company: apiJob.company,
            Location: apiJob.location,
            PostDate: new Date(apiJob.dateAdded),
            Slug: apiJob.slug,
          }));
          resolve(jobs);
        })
        .catch((error) => reject(error));
    });
  },
};

export default TrabajosService;
