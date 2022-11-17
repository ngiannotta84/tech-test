import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = ({ setResults }) => {
    const [value, setValue] = useState(""); /*This set the state of the intial value at "" 
    then we will need an event listener which is the onChange in the input*/
    const handleChange = (event) => setValue(event.target.value)/* and then we will need 
    a function (eventhandler) that sets the new value as the new state remember we need 
    to declare the value */
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setResults(await getImages(value));
    }/*again this is an event listener on Submit that detects a change in state  
    and is triggering and event handler that is making a request getImages that 
    requires a param that is the value that is  also value={query}*/
    return (
        <>
        <form className="search-form" onSubmit={handleSubmit}>
             <input className="search-input" type="text" onChange={handleChange} value ={value}/>
            <button className="search-btn" type="submit">Lets Go!</button>
        </form>
        </>
    )
}

export default Search;