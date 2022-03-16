import PropTypes from "prop-types";
import { AddButton } from "./styles";

const Button = ( {backgroundColor, onClick, text} ) => {
    return (
        <AddButton backgroundColor={backgroundColor} onClick={onClick} >{text}</AddButton>
    );
};

Button.defaultProps = {
    backgroundColor: "steelblue"
};

Button.propTypes = {
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
}

export default Button;