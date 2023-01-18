import PropTypes from "prop-types";
import PageBase from "../../components/pageBase/PageBase";
import MediaBanner from "../../components/mediaBanner/MediaBanner";
import CastCarousel from "../../components/castCarousel/CastCarousel";

const MoviePage = ({data, creditsData}) => {
    return (
        <PageBase>
            <div className="movie-page-content">
                <MediaBanner
                    mediaData={data}
                />
                <CastCarousel castData={creditsData.cast.slice(0, 10)} />
            </div>
        </PageBase>
    )
    
};

MoviePage.propTypes = {
    data: PropTypes.object, //дописать что за объект 
    creditsData: PropTypes.object
};

export default MoviePage;