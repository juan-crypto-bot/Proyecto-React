import React, { useEffect } from 'react';
import { Job } from "../Interfaces";
import LogosService from '../services/Logos.service';
import JobCard from './JobCard';
import "./Styled/JobListStyle.css"
interface JobsListProps{
    myJobs:  Job[];
}

const JobsList = ({myJobs}: JobsListProps) =>{
    
    return(
        <div className='job-list'> 
            {myJobs.length!==0?myJobs.map((job:Job)=>
                <JobCard {...job}/>):<div>Loading...</div>}
                 {/* <div key={job.Slug}>
                 <p>{job.Title}</p>
                 <p>{job.Image}</p>
                 <img src={job.Image} />
             </div>):<div>Loading...</div>} */}
        </div>
        ); 
};
export default JobsList;