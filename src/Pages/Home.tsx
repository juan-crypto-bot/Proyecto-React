import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import axios from 'axios';
import Buscador from '../Components/Buscador';
import {Job} from '../Interfaces';
import Filtros from '../Components/Filtros';

const Home = () => {
    const[myJobs, setMyJobs] = useState<Job[]>([]);
    const[searchQuery, setSearchQuery] = useState<string>("");
    const[error, setError] = useState(false);

    const fetcher = useFetcher();

    useEffect(() => {
        if (fetcher.state === "idle" && !fetcher.data) {
        console.log(fetcher.data);
        }
    }, [fetcher]);
  

  
    return(
        <>
            <Buscador setSearchQuery={setSearchQuery}/> 
            <p>{searchQuery}</p>
            <Filtros/>
        </>
        
    );
};

export async function action({request}:{request:Request}){
    const formData = await request.formData();
    const searchQuery = formData.get("searchQuery")
      try {
          return await axios.get('https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search',{params: {
            SearchQuery: searchQuery
          },
          headers: {
            'X-RapidAPI-Key': 'b5c88dc99cmshe9441e41e8c805ap120231jsn7b7200c615ce',
            'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
          }});
      } catch (error) {
          console.error(error);
      }
      
}
export default Home;

