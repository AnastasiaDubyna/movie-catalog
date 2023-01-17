import PropTypes from "prop-types";
import Popover from '@idui/react-popover'
import "./iconPopover.css";

const IconPopover = ({icon, text}) => (
    <div className="icon-popover">
        <Popover
            animation={{
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.9,
                transition: {
                duration: 0.1
                }
            },
            initial: {
                opacity: 0,
                scale: 0.9
            }
            }}
            closeOnEnter
            content={text}
            fitMaxHeightToBounds
            fitMaxWidthToBounds
        >
            <button className="icon-popover-button">{icon}</button>
        </Popover>
    </div>
);

IconPopover.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string
};

IconPopover.defaultProps = {
    text: "Generic text"
};

export default IconPopover;