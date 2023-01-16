import { Button } from "@mui/material";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";
import "./searchBanner.css";

const SearchBanner = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleChange = ({target: {value}}) => {
        setSearchValue(value);
    };

    const handleSubmit = () => {
        navigate(`/search?query=${searchValue}`);
    };

    return (
        <div className="search-banner">
            <h1>Welcome.</h1>
            <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
            <div className="search-input-container">
                <DebounceInput
                    debounceTimeout={300}
                    onChange={handleChange}
                    value={searchValue}
                    placeholder="Search for a movie, tv show, person...."
                    className="search-input"
                />
                <Button 
                    variant="contained" 
                    id="search-button" 
                    onClick={handleSubmit}>
                        Search
                </Button>
            </div>
        </div>
    )
};

export default SearchBanner;