import { getSearch } from "../../repository/movieRepository";
import { GET_SEARCH } from "../constants";

const getSearchAction = (query, type, page) => async (dispatch) => {
    const data = await getSearch(query, type, page);

    dispatch({
        type: GET_SEARCH,
        payload: {data}
    });
};

export default getSearchAction;