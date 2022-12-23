import { fetchData } from "../api"

const API_URL = process.env.REACT_APP_API_URL;

export const getMovieById = async (id) => {
    const movieData = await (await fetchData(`${API_URL}/movie/${id}`)).data;

    return movieData;
}