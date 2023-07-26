import HttpHandler from "../Utils/HttpHandler";

const Conection = {
  getJob: (
    ruta: string,
    search: string | null,
    page: number | null,
    pageSize: number | null
  ) => {
    return HttpHandler.get(
      "https://jobsearch4.p.rapidapi.com/api/v2/Jobs/" + ruta,
      {
        params: {
          PageNumber: page ? page : 0,
          SearchQuery: search ? search : "dev",
          PageSize: pageSize,
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIAPI_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIAPI_HOST,
        },
      }
    );
  },
  getLogo: (search: string) => {
    return HttpHandler.get("https://api.api-ninjas.com/v1/logo", {
      params: {
        name: search,
      },
      headers: {
        "X-Api-Key": import.meta.env.VITE_LOGO_KEY,
      },
    });
  },
};
export default Conection;
