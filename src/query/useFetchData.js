import { useQuery } from "react-query";
import { getDataById } from "../repository/movieRepository";

const useFetchData = (type, id) => {
    const {isLoading, error, data} = useQuery([type, id], () => getDataById(type, id));
    return {isLoading, error, data};
}

export default useFetchData;