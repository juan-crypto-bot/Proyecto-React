import { Job } from "../model/Job";
import JobAdapter from "../Adapters/JobAdapter";
import JobAdapterFull from "../Adapters/JobAdapterFull";
import Conection from "./Conection.service";

const JobsService = {
  GetTrabajos: (
    search: string,
    page: number
  ): Promise<{ jobs: Job[]; totalPages: number }> => {
    return new Promise<{ jobs: Job[]; totalPages: number }>(
      (resolve, reject) => {
        Conection.get("Search", search, page)
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
      Conection.get(idJob, null, null)
        .then(async (result) => {
          const job = JobAdapterFull(result);
          resolve(job);
        })
        .catch((error) => reject(error));
    });
  },
};

export default JobsService;
