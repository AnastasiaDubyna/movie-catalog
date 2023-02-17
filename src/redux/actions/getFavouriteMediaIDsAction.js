import { getFavouritesIDs } from "../../repository/movieRepository"
import { GET_FAVOURITES } from "../constants";

const getFavouriteMediaIDsAction = () => async (dispatch) => {
    const data = await getFavouritesIDs();

    dispatch({
        type: GET_FAVOURITES, 
        payload: {data}
    });
};

export default getFavouriteMediaIDsAction;