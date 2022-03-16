import { StyledFooter } from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </StyledFooter>
    );
};

export default Footer;