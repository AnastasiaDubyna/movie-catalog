import { useQuery } from "react-query";
import { getFavourites } from "../repository/movieRepository";

const useFetchFavourites = (category) => {
    const {isLoading, error, data} = useQuery(["favourites", category], () => getFavourites(category));

    console.log(data);
    return {
        isFavouritesLoading: isLoading,
        favouritesError: error, 
        favouritesData: data || []
    };
};

export default useFetchFavourites;