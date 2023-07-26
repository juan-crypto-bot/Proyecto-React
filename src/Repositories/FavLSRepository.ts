import { Job } from "../Model/Job";
import IFavRepository from "./IFavRepository";
const FavLSRepository: IFavRepository = {
  getFavs() {
    const favs = localStorage.getItem("favJobs");
    return favs ? JSON.parse(favs) : [];
  },
  setFavs(favJobs: Job[]) {
    localStorage.setItem("favJobs", JSON.stringify(favJobs));
  },
};
export default FavLSRepository;
