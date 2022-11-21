/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../styles/search-results.css";

const SearchResults = ({results}) => {
    if (!results.length) {/*here we are making sure that the search has been completed before dispaying an 
    image so I thinkk it means the promise needs to be completed before moving on....doing this the image gets dispalyed 
    after we search and click and not constantly as before*/
  return <p>No Results</p>
} else {
    return (
      <>
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" /> /* results is an array of href thats why you have {image} in the src*/
        ))}
      </>

      );
    };
};

export default SearchResults;