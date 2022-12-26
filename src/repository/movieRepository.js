import { fetchData } from "../api"

const API_URL = process.env.REACT_APP_API_URL;

export const getMovieById = async (id) => {
    const {data} = await fetchData(`${API_URL}/movie/${id}`);
    console.log(data);

    return data;
}