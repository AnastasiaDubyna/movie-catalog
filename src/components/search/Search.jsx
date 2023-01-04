import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import PropTypes from 'prop-types';
import "./search.css";

const Search = ({placeholder}) => {
    const [searchValue, setSearchValue] = useState("");
    const handleChange = ({target: {value}}) => {
        setSearchValue(value);
    };

    return (
        <DebounceInput
            debounceTimeout={300}
            onChange={handleChange}
            value={searchValue}
            placeholder={placeholder}
            className="search-input"
        />
    )
};

Search.propTypes = {
    placeholder: PropTypes.string
};

Search.defaultProps = {
    placeholder: "Search"
};

export default Search;