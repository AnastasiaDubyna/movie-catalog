import axios from "axios";

const getDefaultHeaders = () => ({
    "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
});

const basicConfig = {
    headers: getDefaultHeaders()
};

export const fetchData = (path) => {
    return axios.get(path, basicConfig);
};

export const postData = (path, data) => {
    return axios.post(path, data, basicConfig);
};

export const deleteData = (path) => {
    return axios.delete(path, basicConfig);
};


