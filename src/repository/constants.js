import { popularCarouselTabs } from "../components/popularCarousel/constants";

const {FOR_RENT, IN_THEATERS, ON_TV, STREAMING} = popularCarouselTabs;

export const popularMediaUrl = {
    [FOR_RENT]: "/tv/popular",
    [IN_THEATERS]: "/movie/now_playing",
    [ON_TV]: "/tv/airing_today",
    [STREAMING]: "/tv/popular"
};