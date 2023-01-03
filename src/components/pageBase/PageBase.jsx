import Header from "../header/Header";
import PropTypes from 'prop-types';
import "./pageBase.css";

const PageBase = ({children}) => {
    return (
        <div>
            <Header />
            <div className="page-content">
                {children}
            </div>
        </div>
    )
};

PageBase.propTypes = {
    children: PropTypes.element
};

export default PageBase;