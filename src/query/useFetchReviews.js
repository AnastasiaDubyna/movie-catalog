import { useQuery } from "react-query";
import { getReviewsById } from "../repository/movieRepository";

const useFetchReviews = (id) => {
    const {isLoading, error, data} = useQuery(["reviews", id], () => getReviewsById(id));
    return {
        isLoadingReviews: isLoading,
        reviewsError: error,
        reviewsData: data
    };
}

export default useFetchReviews;