import { useQuery } from "react-query"
import { getKeyWordsById } from "../repository/movieRepository"

const useFetchKeywords = (type, id) => {
    const {isLoading, error, data} = useQuery("keywords", () => getKeyWordsById(type, id));
    console.log({isLoading, error, data});
    if (!isLoading) {
        console.log("loaded");
    }

    return {
        isLoadingKeywords: isLoading,
        keywordsError: error,
        keywordsData: data
    };
};

export default useFetchKeywords;