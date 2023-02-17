import { useMutation, useQueryClient } from "react-query"
import { deleteFavourite } from "../repository/movieRepository";

// Почти идентично с usePostFavourite. Стоить ли слепить их в один хук? 

const useDeleteFavourite = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteFavourite, {
        onMutate: async (id) => {
            await queryClient.cancelQueries(["favourites"]);
            await queryClient.cancelQueries(["isFavourite", id]);

            const previouseIsFavourite = queryClient.getQueriesData(["isFavourite", id]);
            queryClient.setQueriesData(["isFavourite", id], oldQueryData => ({
                ...oldQueryData,
                data: false
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

export default useDeleteFavourite;