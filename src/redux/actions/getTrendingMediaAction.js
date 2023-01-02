import { getTrending } from "../../repository/movieRepository";
import { GET_TRENDING } from "../constants";

const getTrendingMediaAction = (type) => async (dispatch) => {
    const data = await getTrending(type);

    dispatch({
        type: GET_TRENDING, 
        payload: {data}
    });
};

export default getTrendingMediaAction;