import { ButtonGroup, Button, Card } from "@mui/material";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


const Carousel = ({title, buttons, media}) => {
    if (media) {
        return (
            <div className="carousel">
                <div className="carousel-title">{ title }</div>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" className="carousel-buttons-group">
                    {
                        buttons.map(buttonObj => (
                            <Button onClick={buttonObj.onClick} key={nanoid(3)}>{buttonObj.name}</Button>
                        ))
                    }
                </ButtonGroup>
                <div className="carousel-media">
                    {
                        media.map(mediaData => (
                            <Card key={nanoid(4)}>{mediaData.title}</Card>
                        ))
                    }
                </div>
            </div>
        )
    }
};

Carousel.propTypes = {
    title: PropTypes.string, 
    buttons: PropTypes.array, 
    media: PropTypes.array
};

export default Carousel;