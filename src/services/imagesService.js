import axios from "axios";

const unsplashEndpoint = `https://api.unsplash.com`;

const getImagesBySearch = (query, page) => {
  let url = `${unsplashEndpoint}/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}per_page=9`
  if (query) {
    url += `&query=${query}`
  }

  const config = {
    method: "GET",
    url,
    // withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config)
}

const getImageById = (photoId) => {
  const config = {
    method: "GET",
    url: `${unsplashEndpoint}/photos/${photoId}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
    // withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config)
}

const downloadImage = (url) => {
  const config = {
    method: "GET",
    url: `${url}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
    // withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config)
}



export { getImagesBySearch, getImageById, downloadImage }