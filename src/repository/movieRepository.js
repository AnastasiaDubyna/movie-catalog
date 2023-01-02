import { fetchData } from "../api"

const API_URL = process.env.REACT_APP_API_URL;

export const getMovieById = async (id) => {
    const {data} = await fetchData(`${API_URL}/movie/${id}`);

    return data;
};

export const getTrending = async (type) => {
    const {data: {results}} = await fetchData(`${API_URL}/trending/all/${type}`);
    getConfigurations();
    return results;
};

const getConfigurations = async () => {
    const {data} = await fetchData(`${API_URL}/configuration`);
    console.log(data);
};