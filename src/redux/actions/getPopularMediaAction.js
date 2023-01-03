import { getPopular } from "../../repository/movieRepository"
import { GET_POPULAR } from "../constants";

const getPopularMediaAction = (type) => async (dispatch) => {
    const data = await getPopular(type);

    dispatch({
        type: GET_POPULAR, 
        payload: {data}
    });
};

export default getPopularMediaAction;