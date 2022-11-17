import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResult from "./SearchResults";



const App = () => {
  const [searchResult, setSearchResults]= useState();
  return (
    <div className="app">
      <img className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"/>
      <Search setSearchResult={setSearchResults}/>
      <SearchResult />
    </div>
  );
}

export default App;
