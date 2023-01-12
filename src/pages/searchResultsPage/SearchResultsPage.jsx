import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Tab, Tabs } from '@mui/material';
import { nanoid } from 'nanoid';
import PageBase from "../../components/pageBase/PageBase";
import { MOVIES, PEOPLE, searchResultsTabs, TV_SHOWS } from '../../constants';
import "./searchResultsPage.css";
import MediaCard from '../../components/mediaCard/MediaCard';

// Обсудить 
// при обновлении страницы результаты поиска теряются 

const SearchResultsPage = () => {
    const results = useSelector(state => state.mediaReducer.searched);
    const [activeTab, setActiveTab] = useState(MOVIES);
    
    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    
    const getMediaType = () => {
        switch (activeTab) {
            case MOVIES:
                return "movie";
                case TV_SHOWS:
                    return "tv";
                    case PEOPLE:
                        return "person";
                    }
                };
                
    const getResultsForActiveTab = () => {
        const requiredType = getMediaType();
        return results.filter(resObj => resObj.media_type === requiredType);
    };
    const filteredResults = getResultsForActiveTab();
                 
    return (
        <PageBase>
            <div className="search-results-page-content">
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    id="search-results-tabs"
                    orientation="vertical"
                >
                    {
                        searchResultsTabs.map(tab => <Tab label={tab} value={tab} key={nanoid(3)} />)
                    }
                </Tabs>
                <Grid container spacing={2} className="search-results-container">
                    {
                        filteredResults.map(resObj => (
                            <Grid item key={nanoid(3)}>
                                <MediaCard mediaData={resObj} /> 
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </PageBase>
    )
};

export default SearchResultsPage;