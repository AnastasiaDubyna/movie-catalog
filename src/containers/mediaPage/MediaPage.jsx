import { CircularProgress } from '@mui/material';
import queryString from 'query-string'; 
import { useState } from 'react';
import { MOVIE } from '../../constants';
import MoviePage from '../../pages/moviePage/MoviePage';
import useFetchCredits from '../../query/useFetchCredits';
import useFetchData from '../../query/useFetchData';
import useFetchKeywords from '../../query/useFetchKeywords';
import useFetchReviews from '../../query/useFetchReviews';


const MediaPage = () => {
    const {type, id} = queryString.parse(location.search);
    const {isLoading, error, data} = useFetchData(type, id);
    const {creditsData} = useFetchCredits(type, id);
    const [reviewFormTitle, setReviewFormTitle] = useState("");
    const [reviewFormContent, setReviewFormContent] = useState("");
    const [reviewFormGrade, setReviewFormGrade] = useState(0);

    const handleReviewFormTextChange = ({target: {id, value}}) => {
        switch(id) {
            case "title":
                setReviewFormTitle(value);
                break;
            case "content": 
                setReviewFormContent(value);
                break;
            default:
                clearReviewFormInputs();
                break;
        }
    };

    const handleReviewFormGradeChange = (_, newValue) => {
        setReviewFormGrade(newValue);
    };

    const handleReviewFormSubmit = () => {
        
    };

    const clearReviewFormInputs = () => {
        setReviewFormContent("");
        setReviewFormGrade(0);
        setReviewFormTitle("");
    };

    const getKeywords = () => {
        const {keywordsData} = useFetchKeywords(type, id);
        return keywordsData ? keywordsData.keywords : [];
    };

    const getReviews = () => {
        const {reviewsData} = useFetchReviews(id);
        console.log(reviewsData);
        return reviewsData ? reviewsData.data : [];
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
                        getReviews={getReviews}
                        reviewFormTitle={reviewFormTitle}
                        reviewFormContent={reviewFormContent}
                        reviewFormGrade={reviewFormGrade}
                        onReviewFormTextChange={handleReviewFormTextChange}
                        onReviewFormGradeChange={handleReviewFormGradeChange}
                        onReviewFormSubmit={handleReviewFormSubmit}
                    />
                )
        }
    }
};

export default MediaPage;