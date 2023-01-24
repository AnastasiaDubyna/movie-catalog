import { CircularProgress } from '@mui/material';
import queryString from 'query-string'; 
import { MOVIE } from '../../constants';
import MoviePage from '../../pages/moviePage/MoviePage';
import useFetchCredits from '../../query/useFetchCredits';
import useFetchData from '../../query/useFetchData';
import useFetchKeywords from '../../query/useFetchKeywords';


const MediaPage = () => {
    const {type, id} = queryString.parse(location.search);
    const {isLoading, error, data} = useFetchData(type, id);
    const {creditsData} = useFetchCredits(type, id);

    const getKeywords = () => {
        const {keywordsData} = useFetchKeywords(type, id);
        if (keywordsData) {
            return keywordsData.keywords;
        }
        return [];
    };

    if (isLoading) {
        return <CircularProgress />
    }

    if (error) {
        return <h1>Error</h1>
    }

    if (data) {
        switch (type) {
            case MOVIE:
                return (
                    <MoviePage 
                        data={data} 
                        creditsData={creditsData}
                        getKeywords={getKeywords}
                    />
                )
        }
    }
};

export default MediaPage;