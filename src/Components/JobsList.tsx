import React, { useEffect } from 'react';
import { Job } from "../Interfaces";
import LogosService from '../services/Logos.service';
import JobCard from './JobCard';
import "./Styled/JobListStyle.css"
import PendingIcon from '@mui/icons-material/Pending';

interface JobsListProps{
    myJobs:  Job[];
}

const JobsList = ({myJobs}: JobsListProps) =>{
    
    return(
        <div className='job-list'> 
            {myJobs.length!==0?myJobs.map((job:Job)=>
                <JobCard {...job}/>):
                    <div className='loading'>
                        <PendingIcon 
                            fontSize='medium' 
                            color='primary'>
                        </PendingIcon>
                        Loading...
                    </div>}    
        </div>
        ); 
};
export default JobsList;