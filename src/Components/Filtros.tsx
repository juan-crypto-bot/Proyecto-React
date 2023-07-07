import React from "react";
import {useState} from "react";
import {
    TextField, 
    IconButton, 
    FormLabel, 
    Checkbox, 
    FormGroup, 
    FormControlLabel, 
    FormControl,
    RadioGroup,
    Radio
} from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


interface BuscadorProps{
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
}


const Filtros = () => {
    // const [search,setSearch]=useState("");
    // function handleSearchChange(e:React.ChangeEvent<HTMLInputElement>){
    //     setSearch(e.target.value);
    // }
    // function handleSearch(){
    //     setSearchQuery(search);
    // }
    return(
       <div>
        <FormControl component="fieldset">
            <FormControlLabel
                value="fulltime"
                control={<Checkbox color="primary" />}
                label="FullTime"
                labelPlacement="end"
            />
        </FormControl>
        <h4>LOCATION</h4>
        <TextField 
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            size="small"
            // value={search}
            // onChange={handleSearchChange}
            required
        ></TextField>
       <FormControl component="fieldset">
        <FormControlLabel value="London" control={<Radio />} label="London" />
        <FormControlLabel value="Amsterdam" control={<Radio />} label="Amsterdam" />
        <FormControlLabel value="New York" control={<Radio />} label="New York" />
        <FormControlLabel value="Berlin" control={<Radio />} label="Berlin" />
        </FormControl>
       </div>
    );
};
export default Filtros;