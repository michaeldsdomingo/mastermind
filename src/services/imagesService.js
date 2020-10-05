import axios from "axios";

const unsplashEndpoint = `https://api.unsplash.com/search/photos`;

const getImagesBySearch = (query) => {
    const config = {
        method: "GET",
        url: `${unsplashEndpoint}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=${query}&per_page=9`,
        // withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
      };
      return axios(config)
}

export { getImagesBySearch }