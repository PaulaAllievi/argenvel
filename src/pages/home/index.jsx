import React from "react";
import insumos from "../../assets/insumos.webp";
import bengalas from "../../assets/bengalas.jpeg";
import numeroteshome from "../../assets/numeroteshome.jpeg";
import "./styles.css";

const Home = () => {
  return (
    <div className="container">
      <main>
        <div className="main-text">
          <p className="main-p">
            {" "}
            Hola! Somos ARGENVEL <br />
            Desde el año 2004 dedicándonos a la fabricación de velas para
            cotillón.
          </p>
        </div>
      </main>
      <section className="data">
        <div className="data-item">
          <p>🥳 Productos PREMIUM</p>
        </div>
        <div className="data-item">
          <p>🥳 Envíos GRATIS a CABA y GBA</p>
        </div>
        <div className="data-item">
          <p>🥳 Exclusivo venta MAYORISTA</p>
        </div>
      </section>
      <section className="section-dest">
        <p className="destacados-p">PRODUCTOS DESTACADOS</p>
        <div className="destacados">
          <div className="destacados-item">
            <p className="item-p">Velas</p>
            <img
              className="img-destacados"
              src={numeroteshome}
              alt="numerotes"
            />
          </div>
          <div className="destacados-item">
            <p className="item-p">Bengalas</p>
            <img className="img-destacados" src={bengalas} alt="vengalas" />
          </div>
          <div className="destacados-item">
            <p className="item-p">Insumos</p>
            <img className="img-destacados" src={insumos} alt="insumos" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
