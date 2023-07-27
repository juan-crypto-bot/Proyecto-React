import React, { useState, useEffect } from "react";
import Loader from "../../Loader/Loader";
import "./JobImage.styles.css";
import LogosService from "../../../../../Services/Logos.service";

export const JobImage = ({ company }: { company: string }) => {
  const [jobImage, setJobImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const getJobImage = () => {
    setIsLoading(true);
    LogosService.GetLogos(company)
      .then((result) => {
        setJobImage(result);
        setIsLoading(false);
      })
      .catch((e) => console.log("Hubo un error", e));
  };
  useEffect(() => {
    getJobImage();
  }, [company]);
  return (
    <>
      {!isLoading ? (
        <img className="job-image-grid" src={jobImage ?? "./GitHubIcon.jpg"} />
      ) : (
        <Loader />
      )}
    </>
  );
};
