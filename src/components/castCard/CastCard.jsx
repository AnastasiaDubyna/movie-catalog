import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { API_IMG_W185_URL } from "../../constants";
import "./castCard.css"

const CastCard = ({data}) => (
    <Card className="cast-card">
        <CardMedia>
            <img src={`${API_IMG_W185_URL}${data.profile_path}`} />
        </CardMedia>
        <CardContent>
            <Typography>{data.name}</Typography>
            <Typography>{data.character}</Typography>
        </CardContent>
    </Card>
);

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