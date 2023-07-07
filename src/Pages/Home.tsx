import { useState, useEffect } from "react";
import { useFetcher, useActionData } from "react-router-dom";
import axios from "axios";
import Buscador from "../Components/Buscador";
import { Job } from "../Interfaces";
import Filtros from "../Components/Filtros";
import TrabajosService from "../services/trabajos.service";

const Home = () => {
  // const jobs = useActionData();
  const [myJobs, setMyJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState(false);

  const getTrabajos = () => {
    TrabajosService.GetTrabajos(searchQuery)
      .then((trabajos) => setMyJobs(trabajos))
      .catch((e) => console.log("Hubo un error", e));
  };

  useEffect(() => {
    getTrabajos();
  }, []);

  console.log(myJobs);
  console.log(searchQuery);

  return (
    <>
      <Buscador setSearchQuery={setSearchQuery} />
      <Filtros />
    </>
  );
};

// export async function action({request}:any){
//     const formData = await request.formData();
//     const searchQuery = formData.get("searchQuery")
//       try {
//           return await axios.get('https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search',{params: {
//             SearchQuery: searchQuery
//           },
//           headers: {
//             'X-RapidAPI-Key': 'b5c88dc99cmshe9441e41e8c805ap120231jsn7b7200c615ce',
//             'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
//           }});
//       } catch (error) {
//           console.error(error);
//       }

// }
export default Home;
