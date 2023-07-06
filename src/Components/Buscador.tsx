import React from "react";
import {useState} from "react";

interface BuscadorProps{
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
}


const Buscador = ({setSearchQuery}: BuscadorProps) => {
    const [search,setSearch]=useState("");
    function handleSearchChange(e:React.ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value);
    }
    function handleSearch(){
        setSearchQuery(search);
    }
    return(
       <div>
        <input type="text"
            value={search}
            onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>buscar</button>
       </div>
    );
};
export default Buscador;