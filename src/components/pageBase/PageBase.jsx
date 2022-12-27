import Header from "../header/Header";
import PropTypes from 'prop-types';
import "./pageBase.css";

const PageBase = ({children}) => {
    return (
        <>
            <Header />
            <div className="page-content">
                {children}
            </div>
        </>
    )
};

PageBase.propTypes = {
    children: PropTypes.any
};

export default PageBase;