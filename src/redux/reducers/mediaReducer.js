import { GET_TRENDING } from "../constants";

const defaultState = {
    trending: []
} 

const mediaReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_TRENDING:
            return {
                ...state,
                trending: [...payload.data]
            };
        default: 
            return state;
    }
};

export default mediaReducer;