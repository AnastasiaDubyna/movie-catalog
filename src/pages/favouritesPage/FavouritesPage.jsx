import { useState } from "react";
import { Tabs, Tab, Grid, CircularProgress } from "@mui/material";
import { nanoid } from "nanoid";
import PageBase from "../../components/pageBase/PageBase";
import MediaCard from "../../components/mediaCard/MediaCard";
import ErrorPage from "../errorPage/ErrorPage";
import { MOVIE, MOVIES, PEOPLE, PERSON, TV, TV_SHOWS } from "../../constants";
import { searchResultsTabs as favouritesTabs } from "../../constants";
import "./favouritesPage.css";
import useFetchFavourites from "../../query/useFetchFavourites";
import { useNavigate } from "react-router-dom";


const FavouritesPage = () => {
    const [activeTab, setActiveTab] = useState(MOVIES);
    const navigate = useNavigate(); 
    
    const handleTabChange = (_, newValue) => {
        setActiveTab(newValue);
    };
    
    const handleMediaCardClick = (id, type) => {
        navigate(`/media?type=${type}&id=${id}`);
    };
    
    const getMediaType = () => {
        switch (activeTab) {
            case MOVIES:
                return MOVIE;
            case TV_SHOWS:
                return TV;
            case PEOPLE:
                return PERSON;
        }
    };
                
    const mediaType = getMediaType();
    const {isFavouritesLoading, favouritesError, favouritesData} = useFetchFavourites(mediaType);
                
    if (isFavouritesLoading) {
        return <CircularProgress />
    }

    if (favouritesError) {
        return <ErrorPage />
    }

    return (
        <PageBase>
            <div className="favourites-page-content">
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    id="favourites-tabs"
                    orientation="vertical"
                >
                    {
                        favouritesTabs.map(tab => <Tab label={tab} value={tab} key={nanoid(3)} />)
                    }
                </Tabs>
                <Grid container id="favourite-media-container">
                    {
                        favouritesData.map(resObj => (
                            <Grid item key={nanoid(3)}>
                                <MediaCard 
                                    mediaData={{...resObj, media_type: mediaType}} 
                                    onClick={handleMediaCardClick}
                                /> 
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </PageBase>
    )
};

export default FavouritesPage;