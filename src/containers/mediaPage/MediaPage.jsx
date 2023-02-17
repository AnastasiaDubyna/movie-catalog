import { CircularProgress } from '@mui/material';
import queryString from 'query-string'; 
import { useState } from 'react';
import { MOVIE } from '../../constants';
import MoviePage from '../../pages/moviePage/MoviePage';
import useDeleteFavourite from '../../query/useDeleteFavourite';
import useFetchCredits from '../../query/useFetchCredits';
import useFetchData from '../../query/useFetchData';
import useFetchIsFavourite from '../../query/useFetchIsFavourite';
import useFetchKeywords from '../../query/useFetchKeywords';
import useFetchReviews from '../../query/useFetchReviews';
import usePostFavourite from '../../query/usePostFavourite';
import usePostReview from '../../query/usePostReview';


const MediaPage = () => {
    const {type, id} = queryString.parse(location.search);
    const {isLoading, data} = useFetchData(type, id);
    const [reviewFormTitle, setReviewFormTitle] = useState("");
    const [reviewFormContent, setReviewFormContent] = useState("");
    const [reviewFormGrade, setReviewFormGrade] = useState(0);
    const [reviewFormUsername, setReviewFormUsername] = useState("");
    const {mutate: postReview} = usePostReview();
    const {mutate: postFavourite} = usePostFavourite();
    const {mutate: removeFavourite} = useDeleteFavourite();
    const keywordsQuery = useFetchKeywords(type, id);
    const reviewsQuery = useFetchReviews(id, type);
    const creditsQuery = useFetchCredits(type, id);
    const {isFavourite} = useFetchIsFavourite(id);

    const handleReviewFormTextChange = ({target: {id, value}}) => {
        switch(id) {
            case "title":
                setReviewFormTitle(value);
                break;
            case "content": 
                setReviewFormContent(value);
                break;
            case "username":
                setReviewFormUsername(value);
                break;
            default:
                clearReviewFormInputs();
                break;
        }
    };

    const handleFavouriteButtonClick = () => {
        if (isFavourite) {
            removeFavourite({id});
        } else {
            postFavourite({id, type});
        }
    };

    const handleReviewFormGradeChange = (_, newValue) => {
        setReviewFormGrade(newValue);
    };

    const handleReviewFormSubmit = () => {
        const newReview = {
            title: reviewFormTitle,
            username: reviewFormUsername,
            content: reviewFormContent,
            grade: reviewFormGrade
        };
        
        postReview({id, newReview});
        clearReviewFormInputs();
    };

    const clearReviewFormInputs = () => {
        setReviewFormContent("");
        setReviewFormGrade(0);
        setReviewFormTitle("");
        setReviewFormUsername("");
    };

    if (isLoading) {
        return <CircularProgress />
    }

    switch (type) {
        case MOVIE:
            return (
                <MoviePage 
                    data={data} 
                    isFavourite={isFavourite}
                    creditsQuery={creditsQuery}
                    keywordsQuery={keywordsQuery}
                    reviewsQuery={reviewsQuery}
                    reviewFormTitle={reviewFormTitle}
                    reviewFormContent={reviewFormContent}
                    reviewFormGrade={reviewFormGrade}
                    reviewFormUsername={reviewFormUsername}
                    onReviewFormTextChange={handleReviewFormTextChange}
                    onReviewFormGradeChange={handleReviewFormGradeChange}
                    onReviewFormSubmit={handleReviewFormSubmit}
                    onFavouriteButtonClick={handleFavouriteButtonClick}
                />
            )
    }
    
};

export default MediaPage;