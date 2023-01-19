import { Card, CardContent, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import { API_IMG_W185_URL } from "../../constants";
import "./castCard.css"

const CastCard = ({data}) => {
    const {profile_path, name, character} = data;

    return (
        <Card className="cast-card">
            <CardMedia>
                <img src={`${API_IMG_W185_URL}${profile_path}`} />
            </CardMedia>
            <CardContent>
                <p className="cast-card-name">{name}</p>
                <p>{character}</p>
            </CardContent>
        </Card>
    );
};

CastCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
        character: PropTypes.string.isRequired
    })
};

// запилить какую-то дефотную картинку
CastCard.defaultProps = {
    data: {
        profile_path: " "
    }
};

export default CastCard;