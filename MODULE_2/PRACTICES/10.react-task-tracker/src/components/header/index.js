import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { StyledHeader } from "./styles";
import Button from "../button";

const Header = ({ title, onAdd, showAdd }) => {
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <StyledHeader>
            <h1>{title}</h1>
            {pathname === "/" && <Button backgroundColor={showAdd ? "red" : "green"} onClick={onAdd} text={showAdd ? "Close" : "Add"} />}
        </StyledHeader>
    );
};

Header.defaultProps = {
    title: "Task Tracker"
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;