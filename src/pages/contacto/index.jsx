import React from "react";
import "./styles.css";

const Contacto = () => {
  return (
    <div className="container-contacto">
      <div className="contacto">
        <h2>Contacto</h2>
        <div className="link">
          <a
            href="https://wa.me/+5401165645260?text=Hola,%20quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="whats"
          >
            Enviar mensaje de WhatsApp
          </a>
          <a
            href="mailto:argenvel@yahoo.com.ar?subject=Consulta%20Importante&body=Hola,%20quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="email"
          >
            Enviar correo electrónico
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
