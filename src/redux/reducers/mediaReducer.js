import { GET_FAVOURITES, GET_POPULAR, GET_SEARCH, GET_TRENDING } from "../constants";

const defaultState = {
    trending: [],
    popular: [],
    favourites: [],
    searched: {}
} 

const mediaReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_TRENDING:
            return {
                ...state,
                trending: [...payload.data]
            };
        case GET_POPULAR:
            return {
                ...state,
                popular: [...payload.data]
            };
        case GET_SEARCH:
            return {
                ...state,
                searched: {...payload.data}
            };
        case GET_FAVOURITES:
            return {
                ...state,
                favourites: [...payload.data]
            };
        default: 
            return state;
    }
};

export default mediaReducer;