import { useMutation, useQueryClient } from "react-query"
import { postFavourite } from "../repository/movieRepository";

const usePostFavourite = () => {
    const queryClient = useQueryClient();
    
    return useMutation(postFavourite, {
        onMutate: async (id) => {
            await queryClient.cancelQueries(["favourites"]);
            await queryClient.cancelQueries(["isFavourite", id]);

            const previouseIsFavourite = queryClient.getQueriesData(["isFavourite", id]);
            queryClient.setQueriesData(["isFavourite", id], oldQueryData => ({
                ...oldQueryData,
                data: true
            }));

            return {
                previouseIsFavourite
            }
        },
        onSettled: (_data, _error, vars) => {
            queryClient.invalidateQueries(["isFavourite", vars.id]);
        }
    });
};

export default usePostFavourite;