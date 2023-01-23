import { useQuery } from "react-query"
import { getKeyWordsById } from "../repository/movieRepository"

const useFetchKeywords = (type, id) => {
    const {isLoading, error, data} = useQuery(["keywords", id], () => getKeyWordsById(type, id));
    
    return {
        isLoadingKeywords: isLoading,
        keywordsError: error,
        keywordsData: data
    };
};

export default useFetchKeywords;