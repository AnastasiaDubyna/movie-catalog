import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import ErrorPage from "../../pages/errorPage/ErrorPage";

const LoadingHandler = ({isLoading, error, children}) => {
    
    if (isLoading) {
        return <CircularProgress />
    }

    if (error) {
        //Возвращать какой-то компонент или редиректить на страницу с ошибкой? 
        return <ErrorPage /> 
    }

    return children;
};

LoadingHandler.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.any, //<--------------------
    children: PropTypes.element.isRequired
};

export default LoadingHandler;