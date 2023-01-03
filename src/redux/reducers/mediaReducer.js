import { GET_POPULAR, GET_TRENDING } from "../constants";

const defaultState = {
    trending: [],
    popular: []
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
        default: 
            return state;
    }
};

export default mediaReducer;