import { CircularProgress } from '@mui/material';
import queryString from 'query-string'; 
import { MOVIE, TV } from '../../constants';
import MoviePage from '../../pages/moviePage/MoviePage';
import useFetchCredits from '../../query/useFetchCredits';
import useFetchData from '../../query/useFetchData';
import useFetchKeywords from '../../query/useFetchKeywords';


const MediaPage = () => {
    const {type, id} = queryString.parse(location.search);
    const {isLoading, error, data} = useFetchData(type, id);
    const {creditsData} = useFetchCredits(type, id);
    let keywords = [];
    
    if (type === MOVIE || type === TV) {
        const {keywordsData} = useFetchKeywords(type, id);
        if (keywordsData) {
            keywords = keywordsData.keywords;
        }
        console.log(keywords);
    }

    if (isLoading) {
        return <CircularProgress />
    }

    if (error) {
        <h1>Error</h1>
    }

    if (data) {
        switch (type) {
            case MOVIE:
                return (
                    <MoviePage 
                        data={data} 
                        creditsData={creditsData}
                        keywords={keywords}
                    />
                )
        }
    }
};

export default MediaPage;