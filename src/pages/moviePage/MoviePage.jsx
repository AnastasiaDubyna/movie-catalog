import PropTypes from "prop-types";
import PageBase from "../../components/pageBase/PageBase";
import MediaBanner from "../../components/mediaBanner/MediaBanner";

const MoviePage = ({data}) => {
    console.log(data); 
    return (
        <PageBase>
            <div className="movie-page-content">
                <MediaBanner
                    mediaData={data}
                />
            </div>
        </PageBase>
    )
    
};

MoviePage.propTypes = {
    data: PropTypes.object //дописать что за объект 
}

export default MoviePage;