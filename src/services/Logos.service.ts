import HttpHandler from "../utils/HttpHandler";

const LogosService = {
  GetLogos: (search: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      HttpHandler.get("https://api.api-ninjas.com/v1/logo", {
        params: {
          name: search,
        },
        headers: {
          "X-Api-Key": import.meta.env.VITE_LOGO_KEY,
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
