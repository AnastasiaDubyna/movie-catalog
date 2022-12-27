import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import "./search.css";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const handleChange = ({target: {value}}) => {
        setSearchValue(value);
    };

    return (
        <DebounceInput
            debounceTimeout={300}
            onChange={handleChange}
            value={searchValue}
            placeholder="Search"
            />
    )
};

export default Search;