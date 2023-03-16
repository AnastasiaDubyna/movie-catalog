import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

const LoadingHandler = ({isLoading, children}) => {
    if (isLoading) {
        return <CircularProgress />
    }

    return children;
};

LoadingHandler.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired
};

export default LoadingHandler;