import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items
       const ParsedImages= imageResults.filter(image => image.data[0].media_type === "image")/*filters first object in data array for each image and gets the mediatype image */
       const images = ParsedImages.map(image => image.links[0].href) /* it creates an array of href from the first object in the links array of the previous filtered imagaes */
       console.log(images)
       return images 
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
