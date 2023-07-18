import axios from "axios";
import HttpHandler from "../utils/HttpHandler";

const LogosService = {
  GetLogos: (busqueda: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      HttpHandler.get("https://api.api-ninjas.com/v1/logo", {
        params: {
          name: busqueda,
        },
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "7ydX8tN2lIHYA6ozxhkvSg==yrQeOhzY28VuOj2E",
        },
      })
        .then((result) => {
          resolve(result.data[0]?.image);
        })
        .catch((error) => reject(error));
    });
  },
};

export default LogosService;
