import React from "react";
import {styled} from '@mui/system';
import {TextField, IconButton} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'; 
import SearchIcon from '@mui/icons-material/Search';
import { searchJob } from "../App";

interface BuscadorProps{
    search: searchJob,
    setSearch: React.Dispatch<React.SetStateAction<searchJob>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>
}


const Buscador = ({search, setSearch, setError}: BuscadorProps) => {
    
    const handleSubmit = (e: any) => {
        e.preventDefault(); //prevenir comportamientos por defecto
        
        setSearch({
            job:e.target.job.value,
            request:true
        });
        alert("Enviando");
    };

    const handleReset = (e : any) => {
        setSearch({
            job:"",
            request:false
        });

        setError(false); 
        alert("Resetando");
    }
    
    return(
        <form className="form" autoComplete="on" 
        onSubmit={handleSubmit}
        onReset={handleReset}>
            <IconButton color="primary" type="reset">
            <HomeIcon/>
           </IconButton>
            <TextField 
            id="job"
            name="job"
            label="Job"
            variant="outlined"
            size="small"
            value={search.job}
            onChange={e=>{
                setSearch({
                    ...search,
                    artist: e.target.value,
                    request:false
                });
            }}
            required
            ></TextField>
           <IconButton color="primary" type="submit">
            <SearchIcon/>
           </IconButton> 
        </form>
    );
};
export default Buscador;