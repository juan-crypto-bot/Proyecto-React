import React from "react";
import {useState} from "react";
import {TextField, IconButton} from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';
import { useFetcher,Form } from "react-router-dom";
import "./Styled/BuscadorStyle.css"

interface BuscadorProps{
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
}


const Buscador = ({setSearchQuery}: BuscadorProps) => {
    const [search,setSearch]=useState("");
    function handleSearchChange(e:React.ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value);
    }
    return(
        <Form  className="buscador" method="post">
        <div className="form__control">
            <IconButton color="primary" type="submit">
                <WorkOutlineIcon/>
            </IconButton>
            <TextField className="form__input"
                id="searchQuery"
                name="searchQuery"
                label="Title, companies, expertise or benefits"
                variant="standard"
                size="small"
                value={search}
                onChange={handleSearchChange}
                required
            ></TextField>
            <IconButton color="primary" type="submit">
                <SearchIcon className="search-icon"/>
            </IconButton>
        </div>
        {/* <input type="text" id="searchQuery" name="searchQuery" value={search}
            onChange={handleSearchChange}/>
            <button>Buscar</button> */}
       </Form>
    );
};
export default Buscador;