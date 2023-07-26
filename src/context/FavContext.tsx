import React, { createContext, useContext, useState, useEffect } from "react";
import { Job } from "../Model/Job";
import FavRepository from "../Repositories/FavLSRepository";

interface IFavContext {
  favJobs: Job[];
  addFav: (job: Job) => void;
  removeFav: (job: Job) => void;
  isFav: (job: Job) => boolean;
}

const FavContext = createContext<IFavContext>({
  favJobs: [],
  addFav: () => null,
  removeFav: () => null,
  isFav: () => false,
});

export const useFav = () => useContext(FavContext);

type Props = {
  children?: React.ReactNode;
};

export const FavProvider: React.FC<Props> = ({ children }) => {
  const [favJobs, setFavJobs] = useState<Job[]>(FavRepository.getFavs());
  //VER LOCALSTORAGE COMO IMPLEMENTARLO //AJUSTAR EL ALCANCE DEL FAV TAMBIEN

  useEffect(() => {
    FavRepository.setFavs(favJobs);
  }, [favJobs]);

  function removeFav(job: Job) {
    setFavJobs((prev) => prev.filter((j) => j.Slug !== job.Slug));
  }

  function addFav(job: Job) {
    setFavJobs((prev) => [...prev, job]);
  }

  function isFav(job: Job) {
    return favJobs.findIndex((j) => j.Slug === job.Slug) !== -1;
  }

  const context = { favJobs, addFav, removeFav, isFav };
  return <FavContext.Provider value={context}>{children}</FavContext.Provider>;
};
