import PropTypes from "prop-types";
import PageBase from "../../components/pageBase/PageBase";
import MediaBanner from "../../components/mediaBanner/MediaBanner";
import CastCarousel from "../../components/castCarousel/CastCarousel";
import { CircularProgress, Grid } from "@mui/material";
import "./moviePage.css";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
import Keywords from "../../components/keywords/Keywords";
import ReviewsSection from "../../components/reviewsSection/ReviewsSection";
import ReviewForm from "../../components/reviewForm/ReviewForm";

const MoviePage = ({data, creditsData, keywordsQuery, reviewsQuery, reviewFormTitle, reviewFormUsername, reviewFormContent, reviewFormGrade, onReviewFormTextChange, onReviewFormGradeChange, onReviewFormSubmit, onLoadingError}) => {
    const {status, spoken_languages, budget, revenue, belongs_to_collection} = data;
    const originalLanguage = spoken_languages[0].english_name;
    const mainActors = creditsData && creditsData.cast.slice(0, 10);
    const {isLoadingKeywords, keywordsError, keywordsData} = keywordsQuery;
    const {isLoadingReviews, reviewsError, reviewsData} = reviewsQuery;

    return (
        <PageBase>
            <Grid container className="movie-page-content" justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MediaBanner
                        mediaData={data}
                    />
                </Grid>
                <Grid container item  xs={12} sm={12} md={12} lg={8} justifyContent="space-between">
                    <Grid container item xs={12} sm={12} md={12} lg={9} className="movie-page-main-content">
                        <CastCarousel castData={mainActors} />
                        <ReviewForm
                            title={reviewFormTitle}
                            content={reviewFormContent}
                            grade={reviewFormGrade}
                            username={reviewFormUsername}
                            onTextChange={onReviewFormTextChange}
                            onGradeChange={onReviewFormGradeChange}
                            onSubmit={onReviewFormSubmit}
                        />
                        { 
                            isLoadingReviews //<------------------------?
                                ? (
                                    reviewsError
                                        ? onLoadingError()
                                        : <CircularProgress />
                                )
                                : <ReviewsSection reviews={reviewsData.data}/>
                        }
                        {belongs_to_collection && <CollectionPreview collectionData={belongs_to_collection} />}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={2} id="movie-page-side-section">
                        <div className="movie-page-side-info">
                            <div>
                                <p className="title">Status</p>
                                <p>{status}</p>
                            </div>
                            <div>
                                <p className="title">Original Language</p>
                                <p>{originalLanguage}</p>
                            </div>
                            <div>
                                <p className="title">Budget</p>
                                <p>${budget}</p>
                            </div>
                            <div>
                                <p className="title">Revenue</p>
                                <p>${revenue}</p>
                            </div>
                            <div>
                                <p className="title">Keywords</p>
                                {
                                    isLoadingKeywords 
                                        ? (
                                            keywordsError
                                            ? onLoadingError()
                                            : <CircularProgress /> 
                                        )
                                        : <Keywords keywords={keywordsData.keywords} /> 
                                }
                            </div>
                        </div> 
                    </Grid>
                </Grid>
            </Grid>
        </PageBase>
    )
    
};

MoviePage.propTypes = {
    data: PropTypes.shape({
        status: PropTypes.string,
        spoken_languages: PropTypes.arrayOf(PropTypes.shape({
            english_name: PropTypes.string
        })),
        budget: PropTypes.number,
        revenue: PropTypes.number,
        belongs_to_collection: PropTypes.shape({
            name: PropTypes.string
        })
    }).isRequired, 
    creditsData: PropTypes.shape({
        cast: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            character: PropTypes.string
        })).isRequired
    }).isRequired, 
    keywordsQuery: PropTypes.shape({
        isLoadingKeywords: PropTypes.bool, 
        keywordsError: PropTypes.any, //Какой тут должен быть тип? 
        keywordsData: PropTypes.object
    }).isRequired,
    reviewsQuery: PropTypes.shape({
        isLoadingReviews: PropTypes.bool, 
        reviewsError: PropTypes.any, 
        reviewsData: PropTypes.object
    }).isRequired,
    reviewFormTitle: PropTypes.string.isRequired, 
    reviewFormContent: PropTypes.string.isRequired, 
    reviewFormGrade: PropTypes.number.isRequired, 
    reviewFormUsername: PropTypes.string.isRequired,
    onReviewFormTextChange: PropTypes.func.isRequired, 
    onReviewFormGradeChange: PropTypes.func.isRequired, 
    onReviewFormSubmit: PropTypes.func.isRequired,
    onLoadingError: PropTypes.func.isRequired
};

export default MoviePage;