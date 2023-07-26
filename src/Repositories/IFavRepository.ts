import { Job } from "../Model/Job";

interface IFavRepository {
  getFavs: () => Job[];
  setFavs: (favJobs: Job[]) => void;
}
export default IFavRepository;
