import PropTypes from "prop-types";
import PageBase from "../../components/pageBase/PageBase";
import MediaBanner from "../../components/mediaBanner/MediaBanner";
import CastCarousel from "../../components/castCarousel/CastCarousel";
import { Grid } from "@mui/material";
import "./moviePage.css";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
import Keywords from "../../components/keywords/Keywords";
import ReviewsSection from "../../components/reviewsSection/ReviewsSection";
import ReviewForm from "../../components/reviewForm/ReviewForm";
import LoadingHandler from "../../components/loadingHandler/LoadingHandler";

const MoviePage = ({data, isFavourite, creditsQuery, keywordsQuery, reviewsQuery, reviewFormTitle, reviewFormUsername, reviewFormContent, reviewFormGrade, onReviewFormTextChange, onReviewFormGradeChange, onReviewFormSubmit, onFavouriteButtonClick}) => {
    const {status, spoken_languages, budget, revenue, belongs_to_collection} = data;
    const originalLanguage = spoken_languages[0].english_name;
    const {isLoadingKeywords, keywordsError, keywordsData} = keywordsQuery;
    const {isLoadingReviews, reviewsError, reviewsData} = reviewsQuery;
    const {isLoadingCredits, creditsError, creditsData} = creditsQuery;

    return (
        <PageBase>
            <Grid container className="movie-page-content" justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MediaBanner
                        mediaData={data}
                        isFavourite={isFavourite}
                        onFavouriteButtonClick={onFavouriteButtonClick}
                    />
                </Grid>
                <Grid container item  xs={8} sm={8} md={8} lg={8} justifyContent="space-between">
                    <Grid container item sm={9} md={9} lg={9} className="movie-page-main-content">
                        <LoadingHandler
                            isLoading={isLoadingCredits}
                            error={creditsError}
                        >
                            <CastCarousel creditsData={creditsData} />
                        </LoadingHandler>
                            
                        <ReviewForm
                            title={reviewFormTitle}
                            content={reviewFormContent}
                            grade={reviewFormGrade}
                            username={reviewFormUsername}
                            onTextChange={onReviewFormTextChange}
                            onGradeChange={onReviewFormGradeChange}
                            onSubmit={onReviewFormSubmit}
                        />
                        <LoadingHandler
                            isLoading={isLoadingReviews}
                            error={reviewsError}
                        >
                            <ReviewsSection reviewsData={reviewsData}/>
                        </LoadingHandler>
                        {belongs_to_collection && <CollectionPreview collectionData={belongs_to_collection} />}
                    </Grid>
                    <Grid item sm={2} md={2} lg={2} id="movie-page-side-section">
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
                                <LoadingHandler
                                    isLoading={isLoadingKeywords}
                                    error={keywordsError}
                                >
                                    <Keywords keywordsData={keywordsData} /> 
                                </LoadingHandler>
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
    isFavourite: PropTypes.bool,
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
    creditsQuery: PropTypes.shape({
        isLoadingCredits: PropTypes.bool, 
        creditsError: PropTypes.any, 
        creditsData: PropTypes.object
    }).isRequired,
    reviewFormTitle: PropTypes.string.isRequired, 
    reviewFormContent: PropTypes.string.isRequired, 
    reviewFormGrade: PropTypes.number.isRequired, 
    reviewFormUsername: PropTypes.string.isRequired,
    onReviewFormTextChange: PropTypes.func.isRequired, 
    onReviewFormGradeChange: PropTypes.func.isRequired, 
    onReviewFormSubmit: PropTypes.func.isRequired,
    onFavouriteButtonClick: PropTypes.func.isRequired
};

export default MoviePage;