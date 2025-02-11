import { Link, useNavigate, useLocation } from "react-router-dom";
import { NavContainer } from "./styled";
import { FaArrowLeft } from "react-icons/fa";

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <NavContainer>
            <Link to="/">
                <div>
                    {location.pathname !== "/" && (
                        <FaArrowLeft
                            color="black"
                            onClick={() => navigate(-1)}
                            style={{ cursor: "pointer" }}
                        />
                    )}
                </div>
                <p>CINEFLEX</p>
            </Link>
        </NavContainer>
    );
}
