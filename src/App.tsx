import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Principal from './Pages/Principal'
import Buscador from './Components/Buscador'


const INITIAL_STATE = [
  {
    title: "",
    company:"",
    location:"",
    postDate:"",
    slug:""
  }
]

interface Job {
  Title: string,
  Company: string,
  Location: string,
  PostDate: Date,
  Slug: string
}

export interface searchJob {
  job: string,
  request: boolean
}

function App() {
  
  const searchInit: searchJob = {
      job:"" ,
      request: false
  }
  
  const[myJobs, setMyJobs] = useState<Job[]>([]);
  const[search, setSearch] = useState<searchJob>(searchInit);
  const[error, setError] = useState(false);

  useEffect(()=>{
    localStorage.getItem("myJobs");

    const getData = async() => {
        const{job} = search;
        try{
          let jobAPI=`https://api/v1/Jobs/Search${job}`,
          // logoAPI= `https://api.api-ninjas.com/v1/logo?name=${job.company}`,
          jobRes= await fetch(jobAPI),
          // logoRes= await fetch(logoAPI),
          jobJSON = await jobRes.json();
          // logoJSON = await logoRes.json();

          setCurrentJob({
            title: jobJSON.title[0].strArtist,
            company: jobJSON.company[0].strArtistThumb
          });
        }
        catch(error){
          setSearch({
            job,
            request:false
          });

          setError(true);
        }
    };

    if(!search.request){
      return;
    }
    else{
      getData();
    }
  }, [search]);


  return (
      <div className="App">
        <Principal></Principal>
        <Buscador
          search={search} 
          setSearch={setSearch} 
          setError={setError}
        ></Buscador>
      </div>
  )
}

export default App
