import axios from "axios";

const getDefaultHeaders = () => ({
    "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8"
});

export const fetchData = (path) => {
    const config = {
        headers: getDefaultHeaders()
    }; 

    return axios.get(path, config);
};

