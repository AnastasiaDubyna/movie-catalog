import { GET_TRENDING_FOR_DAY } from "../constants";

const defaultState = {
    trending: {
        day: [],
        week: []
    }
} 

const mediaReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_TRENDING_FOR_DAY:
            return {
                ...state,
                trending: {
                    ...state.trending,
                    ...payload
                }
            };
        default: 
            return state;
    }
};

export default mediaReducer;