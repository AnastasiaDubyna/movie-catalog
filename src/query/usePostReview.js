import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom";
import { postReview } from "../repository/movieRepository"


const usePostReview = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation(postReview, {
        onMutate: async (id, newReview) => {
            await queryClient.cancelQueries(["reviews", id]);
            const previouseReviewsData = queryClient.getQueriesData(["reviews", id]);
            queryClient.setQueriesData(["reviews", id], oldQueryData => ({
                ...oldQueryData,
                data: [
                    ...oldQueryData.data,
                    newReview
                ]
            }));
            return {
                previouseReviewsData
            }
        },
        onError: (_error, vars, context) => {
            queryClient.setQueriesData(["reviews", vars.id], context.previouseReviewsData);
            navigate("/error");
        },
        onSettled: (_data, _error, vars) => {
            queryClient.invalidateQueries(["reviews", vars.id]);
        }
    });
};

export default usePostReview;