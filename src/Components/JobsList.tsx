import React, { useEffect } from 'react';
import { Job } from "../Interfaces";
import LogosService from '../services/logos.service';

interface JobsListProps{
    myJobs:  Job[];
}

const JobsList = ({myJobs}: JobsListProps) =>{
    
    return(
        <div> 
            {myJobs.length!==0?myJobs.map((job:Job)=><div key={job.Slug}>
                <p>{job.Title}</p>
                <p>{job.Image}</p>
                <img src={job.Image} />
            </div>):<div>Loading...</div>}
        </div>
        ); 
};
export default JobsList;