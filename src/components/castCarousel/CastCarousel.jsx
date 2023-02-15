import PropTypes from "prop-types";
import CastCard from "../castCard/CastCard";
import "./castCarousel.css";

const CastCarousel = ({creditsData: {cast}}) => {
    const castTop10 = cast.slice(0, 10);

    return (
        <div className="cast-carousel">
            {castTop10.map(actorData => <CastCard data={actorData} key={actorData.id}/>)}
        </div>
    );
};


CastCarousel.propTypes = {
    creditsData: PropTypes.shape({
        cast: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_path: PropTypes.string,
            character: PropTypes.string.isRequired
        }))
    })
};

export default CastCarousel;