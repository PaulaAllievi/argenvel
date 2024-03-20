import React from "react";
import logonav from "../../assets/logonav.png";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-img">
        <img className="footer-logo" src={logonav} alt="logo" />
      </div>
      <div className="footer-contact">
        <h3>Contacto</h3>
        <div className="contact-container">
          <div>
            <h4>Ubicación</h4>
            <p>San Martín, Bs.As.</p>
            <h4>Horario de atención</h4>
            <p>
              Lunes a Viernes <br />
              9:00hs a 16:00hs{" "}
            </p>
          </div>
          <div>
            <h4>Teléfonos</h4>
            <p>4754-4838</p>
            <p>1164627240</p>
            <p>1165645260</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>argenvel@yahoo.com.ar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
