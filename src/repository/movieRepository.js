import { fetchData } from "../api"
import { popularMediaUrl } from "./constants.js";

const API_URL = process.env.REACT_APP_API_URL;

export const getMovieById = async (id) => {
    const {data} = await fetchData(`${API_URL}/movie/${id}`);
    return data;
};

export const getCreditsById = async (type, id) => {
    const endpoint = type === "person" ? "combined_credits" : "credits";
    const {data} = await fetchData(`${API_URL}/${type}/${id}/${endpoint}`);
    return data;
};

export const getKeyWordsById = async (type, id) => {
    const {data} = await fetchData(`${API_URL}/${type}/${id}/keywords`);
    return data;
};

export const getDataById = async (type, id) => {
    const {data} = await fetchData(`${API_URL}/${type}/${id}`);
    return data;
};

export const getTrending = async (type) => {
    const {data: {results}} = await fetchData(`${API_URL}/trending/all/${type}`);
    return results;
};

export const getPopular = async (type) => {
    const {data: {results}} = await fetchData(`${API_URL}${popularMediaUrl[type]}`);
    return results;
};

export const getSearch = async (query) => {
    const {data: {results}} = await fetchData(`${API_URL}/search/multi?query=${query}`);
    return results;
};

// const getConfigurations = async () => {
//     const {data} = await fetchData(`${API_URL}/configuration`);
//     console.log(data);
// };