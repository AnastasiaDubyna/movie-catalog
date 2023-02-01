import { useQuery } from "react-query";
import { MOVIE, TV } from "../constants";
import { getReviewsById } from "../repository/movieRepository";

const useFetchReviews = (id, type) => {
    const {isLoading, error, data} = useQuery(
        ["reviews", id], 
        () => getReviewsById(id),
        {
            enabled: type === MOVIE || type === TV
        }
    );

    return {
        isLoadingReviews: isLoading,
        reviewsError: error,
        reviewsData: data
    };
}

export default useFetchReviews;