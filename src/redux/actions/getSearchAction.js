import { getSearch } from "../../repository/movieRepository";
import { GET_SEARCH } from "../constants";

const getSearchAction = (query) => async (dispatch) => {
    const data = await getSearch(query);

    console.log(data);

    dispatch({
        type: GET_SEARCH,
        payload: {data}
    });
};

export default getSearchAction;