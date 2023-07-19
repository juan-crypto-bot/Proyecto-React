import { Job } from "../model/Job";
import HttpHandler from "../utils/HttpHandler";
import JobAdapter from "../Adapters/JobAdapter";
import JobAdapterFull from "../Adapters/JobAdapterFull";

const JobsService = {
  GetTrabajos: (
    search: string,
    page: number
  ): Promise<{ jobs: Job[]; totalPages: number }> => {
    return new Promise<{ jobs: Job[]; totalPages: number }>(
      (resolve, reject) => {
        HttpHandler.get(
          "https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search",
          {
            params: {
              PageNumber: page,
              SearchQuery: search.length > 0 ? search : "dev",
              PageSize: 10,
            },
            headers: {
              "X-RapidAPI-Key": import.meta.env.VITE_RAPIAPI_KEY,
              "X-RapidAPI-Host": import.meta.env.VITE_RAPIAPI_HOST,
            },
          }
        )
          .then(async (result) => {
            const totalPages = result.data.totalPages;
            const jobs = JobAdapter(result);
            resolve({ jobs, totalPages });
          })
          .catch((error) => reject(error));
      }
    );
  },
  GetTrabajoById: (idJob: string): Promise<Job> => {
    return new Promise<Job>((resolve, reject) => {
      HttpHandler.get(
        `https://jobsearch4.p.rapidapi.com/api/v2/Jobs/${idJob}`,
        {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPIAPI_KEY,
            "X-RapidAPI-Host": import.meta.env.VITE_RAPIAPI_HOST,
          },
        }
      )
        .then(async (result) => {
          const job = JobAdapterFull(result);
          resolve(job);
        })
        .catch((error) => reject(error));
    });
  },
};

export default JobsService;
