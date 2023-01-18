import PropTypes from "prop-types";
import PageBase from "../../components/pageBase/PageBase";
import MediaBanner from "../../components/mediaBanner/MediaBanner";
import CastCarousel from "../../components/castCarousel/CastCarousel";
import { Grid } from "@mui/material";
import "./moviePage.css";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
// import Keywords from "../../components/keywords/Keywords";

const MoviePage = ({data, creditsData}) => {
    const {status, spoken_languages, budget, revenue, belongs_to_collection} = data;
    const originalLanguage = spoken_languages[0].english_name;
    const mainActors = creditsData.cast.slice(0, 10);

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
                        <CollectionPreview collectionData={belongs_to_collection} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={2}>
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
                        </div> 
                        {/* <Keywords keywords={keywords} />  */}
                    </Grid>
                </Grid>
                {/* <Grid item xs={12} sm={12} md={12} lg={8}>
                    <CollectionPreview collectionData={belongs_to_collection} />
                </Grid> */}
            </Grid>
        </PageBase>
    )
    
};

MoviePage.propTypes = {
    data: PropTypes.object, //дописать что за объект 
    creditsData: PropTypes.object, 
    keywords: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired, 
        id: PropTypes.number.isRequired
    }))
};

export default MoviePage;