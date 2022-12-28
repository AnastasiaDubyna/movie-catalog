import { fetchData } from "../api"

const API_URL = process.env.REACT_APP_API_URL;

export const getMovieById = async (id) => {
    const {data} = await fetchData(`${API_URL}/movie/${id}`);

    return data;
};

export const getTrendingForDay = async () => {
    const {data: {results}} = await fetchData(`${API_URL}/trending/all/day`);
    return results;
};

export const getTrendingForWeek = async () => {
    const {data: {results}} = await fetchData(`${API_URL}/trending/all/week`);

    return results;
};

// export const getImage = async () => {
//     const response = await fetchData("https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg");
//     console.log(response);
// }