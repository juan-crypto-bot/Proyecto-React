import { Job } from "../Model/Job";
import IFavRepository from "./IFavRepository";

const FavLSRepository: IFavRepository = {
  getFavs() {
    const favsString = localStorage.getItem("favJobs");
    const favs = favsString ? JSON.parse(favsString) : [];
    return favs.map((f: any) => ({
      ...f,
      PostDate: new Date(Date.parse(f.PostDate)),
    }));
  },
  setFavs(favJobs: Job[]) {
    localStorage.setItem("favJobs", JSON.stringify(favJobs));
  },
};
export default FavLSRepository;
