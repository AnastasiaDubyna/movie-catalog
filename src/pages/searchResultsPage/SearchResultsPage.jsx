import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Pagination, Tab, Tabs } from '@mui/material';
import { nanoid } from 'nanoid';
import PageBase from "../../components/pageBase/PageBase";
import { MOVIE, MOVIES, PEOPLE, PERSON, searchResultsTabs, TV, TV_SHOWS } from '../../constants';
import "./searchResultsPage.css";
import MediaCard from '../../components/mediaCard/MediaCard';
import getSearchAction from '../../redux/actions/getSearchAction';
import queryString from 'query-string'; 
import { useNavigate } from 'react-router-dom';

const SearchResultsPage = () => {
    const {results, total_pages} = useSelector(state => state.mediaReducer.searched);
    const [activeTab, setActiveTab] = useState(MOVIES);
    const [activePage, setActivePage] = useState(1);
    const {query} = queryString.parse(location.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTabChange = (_, newValue) => {
        setActiveTab(newValue);
        setActivePage(1);
    };

    const handlePageChange = (_, value) => {
        setActivePage(value);
    };

    const handleMediaCardClick = (id, type) => {
        navigate(`/media?type=${type}&id=${id}`);
    };
    
    useEffect(() => {
        const type = getMediaType();
        dispatch(getSearchAction(query, type, activePage));
    }, [activeTab, activePage]);

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
                <Grid container id="search-results-container">
                    {
                        results && results.map(resObj => (
                            <Grid item key={nanoid(3)}>
                                <MediaCard 
                                    mediaData={{...resObj, media_type: getMediaType()}} 
                                    onClick={handleMediaCardClick}
                                /> 
                            </Grid>
                        ))
                    }
                    <Grid item container justifyContent="center" id="search-results-pagination">
                        <Pagination 
                            count={total_pages} 
                            page={activePage} 
                            onChange={handlePageChange}
                        />
                    </Grid>
                </Grid>
            </div>
        </PageBase>
    )
};

export default SearchResultsPage;