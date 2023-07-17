import axios from "axios";
import { Job } from "../model/Job";
import LogosService from "./Logos.service";

const TrabajosService = {
  GetTrabajos: (
    search: string,
    page: number
  ): Promise<{ jobs: Job[]; totalPages: number }> => {
    return new Promise<{ jobs: Job[]; totalPages: number }>(
      (resolve, reject) => {
        axios
          .get("https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search", {
            params: {
              PageNumber: page,
              SearchQuery: search.length > 0 ? search : "dev",
              PageSize: 10,
            },
            headers: {
              "X-RapidAPI-Key":
                "b5c88dc99cmshe9441e41e8c805ap120231jsn7b7200c615ce",
              "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
            },
          })
          .then(async (result) => {
            console.log(result);
            const totalPages = result.data.totalPages;
            const apiJobs: any[] = result.data.data;
            const jobs: Job[] = await Promise.all(
              apiJobs.map(async (apiJob) => {
                const arrayDate = apiJob.postDate.split(" ")[0].split("/");
                return {
                  Image: await LogosService.GetLogos(apiJob.company),
                  Title: apiJob.title,
                  Company: apiJob.company,
                  Location: apiJob.location,
                  PostDate: new Date(arrayDate[2], arrayDate[1], arrayDate[0]),
                  Slug: apiJob.slug,
                  description: "",
                };
              })
            );
            resolve({ jobs, totalPages });
          })
          .catch((error) => reject(error));
      }
    );
  },
  GetTrabajoById: (idJob: string): Promise<Job> => {
    return new Promise<Job>((resolve, reject) => {
      axios
        .get(`https://jobsearch4.p.rapidapi.com/api/v2/Jobs/${idJob}`, {
          headers: {
            "X-RapidAPI-Key":
              "b5c88dc99cmshe9441e41e8c805ap120231jsn7b7200c615ce",
            "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
          },
        })
        .then(async (result) => {
          const job = {
            Image: await LogosService.GetLogos(result.data.company),
            Title: result.data.title,
            Company: result.data.company,
            Location: result.data.location,
            PostDate: new Date(result.data.dateAdded),
            Slug: result.data.slug,
            description: result.data.originalPosting,
          };
          resolve(job);
        })
        .catch((error) => reject(error));
    });
  },
};

export default TrabajosService;
