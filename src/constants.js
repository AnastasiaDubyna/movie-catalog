export const STREAMING = "streaming";
export const ON_TV = "on tv";
export const FOR_RENT = "for rent";
export const IN_THEATERS = "in theaters";
export const popularCarouselTabs = [STREAMING, ON_TV, FOR_RENT, IN_THEATERS];

export const DAY = "day";
export const WEEK = "week";
export const trendingCarouselTabs = [DAY, WEEK];

export const MOVIES = "movies";
export const TV_SHOWS = "tv_shows";
export const PEOPLE = "people";
export const searchResultsTabs = [MOVIES, TV_SHOWS, PEOPLE];

export const MOVIE = "movie";
export const TV = "tv";
export const PERSON = "person";
export const mediaTypes = [MOVIE, TV, PERSON];

export const API_IMG_W300_URL = "https://image.tmdb.org/t/p/w300";
export const API_IMG_W185_URL = "https://image.tmdb.org/t/p/w185";
export const API_IMG_ORIGINAL_URL = "https://image.tmdb.org/t/p/original";
export const API_IMG_W1280_URL = "https://image.tmdb.org/t/p/w1280";

export const popularMediaTypes = {
    [STREAMING]: TV,
    [ON_TV]: TV,
    [FOR_RENT]: TV, 
    [IN_THEATERS]: MOVIE
};