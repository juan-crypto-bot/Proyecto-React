import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Buscador from '../Components/Buscador';
import {Job} from '../Interfaces';

const Home = () => {
    const[myJobs, setMyJobs] = useState<Job[]>([]);
    const[searchQuery, setSearchQuery] = useState<string>("");
    const[error, setError] = useState(false);
    

    useEffect(()=>{
  
      const getData = async() => {
        
      };
      getData();
    }, [searchQuery]);
  
    return(
        <>
            <Buscador setSearchQuery={setSearchQuery}/> 
            <p>{searchQuery}</p>
        </>
        
    );
};
export default Home;