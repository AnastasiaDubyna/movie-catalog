// Почему мы выносим это в отдельный хук? 
import { useQuery } from "react-query";
import { getDataById } from "../repository/movieRepository";

const useFetchData = (type, id) => useQuery(type, () => getDataById(type, id));

export default useFetchData;