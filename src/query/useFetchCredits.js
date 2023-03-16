import { useQuery } from "react-query";
import { getCreditsById } from "../repository/movieRepository";

const useFetchCredits = (type, id) => {
    const {isLoading, error, data} = useQuery(["credits", id], () => getCreditsById(type, id));
    return {
        isLoadingCredits: isLoading, 
        creditsError: error, 
        creditsData: data
    };
}
export default useFetchCredits;