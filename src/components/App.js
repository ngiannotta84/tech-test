import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResult from "./SearchResults";



const App = () => {
  const [results, setResults]= useState([]);/* this use state is setting the default state in app as an empty array because the API is returning an array,
  and is passing the setter to Search component where is set to be equal to the results coming from the API when the form gets updated with the search 
  (change in event status or also said handleSubmit)*/
  return (
    <div className="app">
      <img className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"/>
      <Search setResults={setResults}/>
      <SearchResult results={results} />  
    </div>
  );
}
/* in Search the prop that we are passing is making sure that the the query(value) request updates the state
(result) and then the new state gets passed down to SearchResult component which is basically rendering it*/
export default App;
