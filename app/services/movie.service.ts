import axios from "axios";

const API_KEY = "74e62011f50510091153517a06fec77c";
const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const searchMovies = async (query: string) => {
  try {
    const response = await client.get("/search/movie", {
      params: { query },
    });

    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.log("couldn't get the data");
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
