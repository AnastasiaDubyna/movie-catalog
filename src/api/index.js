import axios from "axios";

const getDefaultHeaders = () => ({
    "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
});

export const fetchData = (path) => {
    const config = {
        headers: getDefaultHeaders()
    }; 

    return axios.get(path, config);
};

export const postData = (path, data) => {
    const config = {
        headers: getDefaultHeaders()
    }; 


    return axios.post(path, data, config);
};

export const deleteData = (path) => {
    const config = {
        headers: getDefaultHeaders()
    }; 

    return axios.delete(path, config);
}


