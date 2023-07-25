import { Job } from "../Model/Job";
const FavRepository = {
  getFavs() {
    const favs = localStorage.getItem("favJobs");
    return favs ? JSON.parse(favs) : [];
  },
  setFavs(favJobs: Job[]) {
    localStorage.setItem("favJobs", JSON.stringify(favJobs));
  },
};
export default FavRepository;
