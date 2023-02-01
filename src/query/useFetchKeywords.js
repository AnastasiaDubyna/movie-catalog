import { useQuery } from "react-query"
import { MOVIE, TV } from "../constants";
import { getKeyWordsById } from "../repository/movieRepository"

const useFetchKeywords = (type, id) => {
    const {isLoading, error, data} = useQuery(
        ["keywords", id], 
        () => getKeyWordsById(type, id),
        {
            enabled: type === MOVIE || type === TV
        }
    );
    
    return {
        isLoadingKeywords: isLoading,
        keywordsError: error,
        keywordsData: data
    };
};

export default useFetchKeywords;