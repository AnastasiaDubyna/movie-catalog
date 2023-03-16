import { useQuery } from "react-query";
import { getFavourites } from "../repository/movieRepository";

const useFetchFavourites = (type) => {
    const {isLoading, error, data} = useQuery(["favourites", type], () => getFavourites(type));

    return {
        isFavouritesLoading: isLoading,
        favouritesError: error, 
        favouritesData: data || []
    };
};

export default useFetchFavourites;