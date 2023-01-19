import PropTypes from "prop-types";
import "./keywords.css";

const Keywords = ({keywords}) => (
    <div className="keywords-container">
        {keywords.map(keyword => <p key={keyword.id} className="keyword">{keyword.name}</p>)}
    </div>
);

Keywords.propTypes = {
    keywords: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired, 
        id: PropTypes.number.isRequired
    }))
};

export default Keywords;