import React, { createContext, useContext, useState, useEffect } from "react";
import { Job } from "../model/Job";

const FavContext = createContext<{
  favJobs: Job[];
  handleFav: (job: Job) => void;
}>({
  favJobs: [],
  handleFav: () => null,
});

export const useFav = () => useContext(FavContext);

type Props = {
  children?: React.ReactNode;
};

export const FavProvider: React.FC<Props> = ({ children }) => {
  const [favJobs, setFavJobs] = useState<Job[]>([]);

  useEffect(() => {
    console.log(favJobs);
  }, [favJobs]);

  function handleFav(job: Job) {
    const index = favJobs.findIndex((j) => j.Slug === job.Slug);
    if (index !== -1) {
      setFavJobs((prev) => prev.filter((_, i) => i !== index));
    } else {
      setFavJobs((prev) => [...prev, job]);
    }
  }

  const context = { favJobs, handleFav };
  return <FavContext.Provider value={context}>{children}</FavContext.Provider>;
};
