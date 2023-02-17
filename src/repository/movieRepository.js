import { deleteData, fetchData, postData } from "../api"
import { ALL, popularMediaUrl } from "./constants.js";

const API_URL = process.env.REACT_APP_API_URL;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getReviewsById = async (id) => {
    const {data} = await fetchData(`${SERVER_URL}/review/all/${id}`);
    return data;
}

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

export const getSearch = async (query, type, page) => {
    const {data} = await fetchData(`${API_URL}/search/${type}?query=${query}&page=${page}`);
    return data;
};

export const getFavourites = async (type) => {
    const IDs = await getFavouritesIDs(type);
    const results = await Promise.all(IDs.map(async id => await getDataById(type, id)));

    return results;
};

export const getIsFavourite = async (id) => {
    const {data: isFavourite} = await fetchData(`${SERVER_URL}/favourite/isFavourite?id=${id}`);

    return isFavourite;
}

export const getFavouritesIDs = async (type=ALL) => {
    const {data: {results}} = await fetchData(`${SERVER_URL}/favourite/getAll?type=${type}`);

    return results;
};

export const postReview = async ({id, newReview}) => {
    const {data: {success}} = await postData(`${SERVER_URL}/review/add`, {id, newReview});
    return success;
};

export const postFavourite = async ({id, type}) => {
    await postData(`${SERVER_URL}/favourite/add?id=${id}&type=${type}`);
};

export const deleteFavourite = async ({id}) => {
    await deleteData(`${SERVER_URL}/favourite/remove?id=${id}`);
};