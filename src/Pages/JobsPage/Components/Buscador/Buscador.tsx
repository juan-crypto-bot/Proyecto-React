import React from "react";
import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SearchIcon from "@mui/icons-material/Search";
import "./Buscador.styles.css";

interface BuscadorProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({ setSearchQuery }: BuscadorProps) => {
  const [search, setSearch] = useState("");
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  function handleSearchQueryChange() {
    setSearchQuery(search);
  }

  return (
    <div className="buscador">
      <div className="form__control">
        <IconButton color="primary" type="submit">
          <WorkOutlineIcon />
        </IconButton>
        <TextField
          className="form__input"
          id="searchQuery"
          name="searchQuery"
          label="Title, companies, expertise or benefits"
          variant="standard"
          size="small"
          value={search}
          onChange={handleSearchChange}
          required
        ></TextField>
        <IconButton
          color="primary"
          type="button"
          onClick={handleSearchQueryChange}
        >
          <SearchIcon className="search-icon" />
        </IconButton>
      </div>
      {/* <input type="text" id="searchQuery" name="searchQuery" value={search}
            onChange={handleSearchChange}/>
            <button>Buscar</button> */}
    </div>
  );
};
export default Buscador;
