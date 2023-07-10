import React from 'react';
import { Job } from "../Interfaces";
import "./Styled/JobCardStyle.css"
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';

const JobCard = (job:Job) => {
    return(
        <div className='job-card'>
            {job.Image? <img className='image' src={job.Image} />:<img className='image' src="" />}
            <div className='info'>
                <p className='company'>{job.Company}</p> 
                <p className='title'>{job.Title}</p>
            </div>            
                <button className='boton'>
                    <IconButton color="primary" type="submit">
                    <AddCircleIcon></AddCircleIcon>
                    </IconButton>
                    Ver más
                </button>
        </div>
    );
};
export default JobCard;