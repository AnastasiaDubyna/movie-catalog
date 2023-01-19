import PropTypes from "prop-types";
import { API_IMG_ORIGINAL_URL } from "../../constants";
import "./collectionPreview.css";

const CollectionPreview = ({collectionData}) => {
    const {backdrop_path, name} = collectionData;

    return (
        <div className="collection-preview">
            <img src={`${API_IMG_ORIGINAL_URL}${backdrop_path}`} />
            <div>
                <h2>Part of The {name}</h2>
                <button>view the collection</button>
            </div>
        </div>
    );
};

CollectionPreview.propTypes = {
    collectionData: PropTypes.shape({
        backdrop_path: PropTypes.string,
        name: PropTypes.string.isRequired
    })
};

export default CollectionPreview;
