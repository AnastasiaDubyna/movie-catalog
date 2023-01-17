import PropTypes from "prop-types";
import CastCard from "../castCard/CastCard";
import "./castCarousel.css";

const CastCarousel = ({castData}) => (
    <div className="cast-carousel">
        {castData.map(actorData => <CastCard data={actorData} key={actorData.id}/>)}
    </div>
);

CastCarousel.propTypes = {
    castData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
        character: PropTypes.string.isRequired
    }))
};

export default CastCarousel;