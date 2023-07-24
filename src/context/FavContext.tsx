import React, { createContext, useContext, useState, useEffect } from "react";
import { Job } from "../Model/Job";

const FavContext = createContext<{
  favJobs: Job[];
  handleFav: (job: Job) => void;
  isFav: (job: Job) => number;
}>({
  favJobs: [],
  handleFav: () => null,
  isFav: () => 0,
});

export const useFav = () => useContext(FavContext);

type Props = {
  children?: React.ReactNode;
};

export const FavProvider: React.FC<Props> = ({ children }) => {
  const [favJobs, setFavJobs] = useState<Job[]>(
    JSON.parse(localStorage.getItem("favJobs") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("favJobs", JSON.stringify(favJobs));
  }, [favJobs]);

  function handleFav(job: Job) {
    const index = isFav(job);
    if (index !== -1) {
      setFavJobs((prev) => prev.filter((_, i) => i !== index));
    } else {
      setFavJobs((prev) => [...prev, job]);
    }
  }

  function isFav(job: Job) {
    return favJobs.findIndex((j) => j.Slug === job.Slug);
  }

  const context = { favJobs, handleFav, isFav };
  return <FavContext.Provider value={context}>{children}</FavContext.Provider>;
};
