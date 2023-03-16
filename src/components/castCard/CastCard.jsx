import { Card, CardContent, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import { API_IMG_W185_URL } from "../../constants";
import "./castCard.css"

const CastCard = ({data}) => {
    const {profile_path, name, character} = data;

    return (
        <Card className="cast-card">
            <CardMedia>
                {
                    profile_path
                    ? <img src={`${API_IMG_W185_URL}${profile_path}`} />
                    : <img src={require("../../images/not-found.png")}/>
                }
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
    }).isRequired
};

export default CastCard;