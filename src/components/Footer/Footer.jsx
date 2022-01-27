import { Link } from "react-router-dom";
import Logo from "../../assets/images/logoSinFondo.png";
import Twitter from "../../assets/images/twitter.png";
import Facebook from "../../assets/images/facebook.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import Instagram from "../../assets/images/instagram.png";
import './Footer.css';

const Footer = () =>{
    return(
        <div className="container-fluid footer">
            <div className="row"> 
                <div className="col-lg-3 col-xs-12">
                    <Link to="/"><img src={Logo} alt="Logo Pattas PetShop"/></Link>
                </div>
                <div className="col-lg-3 col-xs-12 footerD">
                    <p>ATENCIÓN AL CLIENTE<br/>Av. Gral. Lavalle 2800,<br/>B2800AAB Buenos Aires,<br/>Provincia de Buenos Aires<br/>Telefono<br/>Correo</p>
                </div>
                <div className="col-lg-3 col-xs-12 footerD">
                    <p>Preguntas Frecuentes<br/>Formas de pagos y envíos<br/>Servicios<br/><Link className="colFooter" to="/contacto">Contacto</Link></p>
                </div>
                <div className="col-lg-3 col-xs-12">
                    <img src={Twitter} alt="Twitter"/>&nbsp;<img src={Facebook} alt="Facebook"/>&nbsp;<img src={Instagram} alt="Instagram"/>&nbsp;<img src={Whatsapp} alt="Whatsapp"/>
                </div>
            </div>
            <div className="row centrado">
                <div className="col-lg-12 col-xs-12">
                    <h6>Made with ♥ by Clara Rodriguez</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;