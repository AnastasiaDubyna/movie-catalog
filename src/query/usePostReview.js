import { useMutation, useQueryClient } from "react-query"
import { postReview } from "../repository/movieRepository"


const usePostReview = () => {
    // чёт придумать на случай ошибки
    const queryClient = useQueryClient();

    return useMutation(postReview, {
        onSuccess: (_, vars) => {
            queryClient.invalidateQueries(["reviews", vars.id]);
        }
    });
};

export default usePostReview;