import { useQuery } from "react-query";
import { getIsFavourite } from "../repository/movieRepository";

const useFetchIsFavourite = (id) => {
    const {isLoading, error, data} = useQuery(["isFavourite", id], () => getIsFavourite(id));

    return {
        isLoading, 
        error, 
        isFavourite: data ? data.isFavourite : false
    };
};

export default useFetchIsFavourite;