import Conection from "./Conection.service";

const LogosService = {
  GetLogos: (search: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      Conection.getLogo(search)
        .then((result) => {
          resolve(result.data[0]?.image);
        })
        .catch((error) => reject(error));
    });
  },
};

export default LogosService;
