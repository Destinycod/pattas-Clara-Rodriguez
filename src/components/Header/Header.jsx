import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";
import NavBar from "../NavBar/NavBar";
import Logo from "../../assets/images/logoSinFondo.png";
import "./Header.css";

const Header = () =>{

    return(
        <div className="header">
            <div className="container-fluid">
                <div className="row alignCenter">
                    {/* <!-- Logo --> */}
                    <div className="col-lg-2 col-xs-10">
                        <Link to="/"><img className="imgLogo" src={Logo} alt="Logo Pattas Petshop"/></Link>
                    </div>
                    {/* <!-- NavBar --> */}
                    <div className="col-lg-9 col-xs-2 paddingRL">
                        <NavBar />
                    </div>
                    <div className="col-lg-1">
                        <Link  className="cartWidget" to="/carrito" ><CartWidget/></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;