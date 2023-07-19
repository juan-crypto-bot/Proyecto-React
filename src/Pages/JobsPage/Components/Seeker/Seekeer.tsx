import React, { useEffect } from "react";
import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SearchIcon from "@mui/icons-material/Search";
import "./Seeker.styles.css";

interface Pagination {
  page: number;
  totalPages: number;
}

interface SeekerProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
}

const Seeker = (props: SeekerProps) => {
  const [search, setSearch] = useState(localStorage.getItem("search") ?? "");
  useEffect(() => {
    props.setSearchQuery(search);
  }, []);

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  function handleSearchQueryChange() {
    props.setSearchQuery(search);
    props.setPagination((prev) => ({ ...prev, page: 1 }));
  }

  return (
    <div className="seeker">
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
    </div>
  );
};
export default Seeker;
