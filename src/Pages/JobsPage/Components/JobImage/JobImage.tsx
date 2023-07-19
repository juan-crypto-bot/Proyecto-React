import React, { useState, useEffect } from "react";
import LogosService from "../../../../services/Logos.service";
import Loader from "../Loader/Loader";
import "./JobImage.styles.css";

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
  }, []);
  return (
    <>
      {!isLoading ? (
        <img className="job-image" src={jobImage ?? "./GitHubIcon.jpg"} />
      ) : (
        <Loader />
      )}
    </>
  );
};
