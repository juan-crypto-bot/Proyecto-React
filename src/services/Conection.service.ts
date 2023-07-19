import HttpHandler from "../utils/HttpHandler";

const Conection = {
  get: (ruta: string, search: string | null, page: number | null) => {
    return HttpHandler.get(
      "https://jobsearch4.p.rapidapi.com/api/v2/Jobs/" + ruta,
      {
        params: {
          PageNumber: page ? page : 0,
          SearchQuery: search ? (search.length > 0 ? search : "dev") : "",
          PageSize: 10,
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIAPI_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIAPI_HOST,
        },
      }
    );
  },
};
export default Conection;
