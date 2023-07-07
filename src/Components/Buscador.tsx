import React from "react";
import {useState} from "react";
import {TextField, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useFetcher } from "react-router-dom";

interface BuscadorProps{
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
}


const Buscador = ({setSearchQuery}: BuscadorProps) => {
    const [search,setSearch]=useState("");
    const {Form} = useFetcher()
    function handleSearchChange(e:React.ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value);
    }
    return(
        <Form method="get">
        <TextField 
            id="searchQuery"
            name="searchQuery"
            label="Title, companies, expertise or benefits"
            variant="outlined"
            size="small"
            style = {{width: 700}}
            value={search}
            onChange={handleSearchChange}
            required
        ></TextField>
        <IconButton color="primary" type="submit">
            <SearchIcon/>
        </IconButton> 
        {/* <input type="text" id="searchQuery" name="searchQuery" value={search}
            onChange={handleSearchChange}/>
            <button>Buscar</button> */}
       </Form>
    );
};
export default Buscador;