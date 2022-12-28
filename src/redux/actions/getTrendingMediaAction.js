import { trendingCarouselTabs } from "../../pages/constants";
import { getTrendingForDay, getTrendingForWeek } from "../../repository/movieRepository";
import { GET_TRENDING_FOR_DAY, GET_TRENDING_FOR_WEEK } from "../constants";

const getTrendingMediaAction = (type) => async (dispatch) => {
    const data = type === trendingCarouselTabs.DAY ? await getTrendingForDay() : await getTrendingForWeek();

    console.log(data);
    
    dispatch({
        type: trendingCarouselTabs.DAY ? GET_TRENDING_FOR_DAY : GET_TRENDING_FOR_WEEK, 
        payload: {type: data}});
};

export default getTrendingMediaAction;