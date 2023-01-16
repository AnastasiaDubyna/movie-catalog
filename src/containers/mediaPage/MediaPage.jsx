import { CircularProgress } from '@mui/material';
import queryString from 'query-string'; 
import { MOVIE } from '../../constants';
import MoviePage from '../../pages/moviePage/MoviePage';
import useFetchData from '../../query/useFetchData';


const MediaPage = () => {
    const {type, id} = queryString.parse(location.search);
    const {isLoading, error, data} = useFetchData(type, id);

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
                    <MoviePage data={data}/>
                )
        }
    }
};

export default MediaPage;