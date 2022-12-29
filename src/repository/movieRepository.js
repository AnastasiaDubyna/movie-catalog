import { fetchData } from "../api"

const API_URL = process.env.REACT_APP_API_URL;

export const getMovieById = async (id) => {
    const {data} = await fetchData(`${API_URL}/movie/${id}`);

    return data;
};

export const getTrending = async (type) => {
    const {data: {results}} = await fetchData(`${API_URL}/trending/all/${type}`);
    getImage();
    return results;
};

export const getImage = async () => {
    // const {data: {posters}} = await fetchData("https://api.themoviedb.org/3/movie/550/images");
    // console.log(posters);
    // const {data: {images: {base_url}}} = await fetchData(`${API_URL}/configuration`);
    // console.log(base_url);
    const response = await fetchData("https://image.tmdb.org/t/p/w342/cdkyMYdu8ao26XOBvilNzLneUg1.jpg");
    console.log(response);
};