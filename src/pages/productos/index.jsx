import React from "react";
import numerosrojo from "../../assets/numerosrojo.jpeg";
import numerosrosa from "../../assets/numerosrosa.jpeg";
import numerosblancos from "../../assets/numerosblancos.jpeg";
import numerosazul from "../../assets/numerosazul.jpeg";
import numeroteperladoazul from "../../assets/numeroteperladoazul.jpeg";
import numeroteperladoblanco from "../../assets/numeroteperladoblanco.jpeg";
import numeroteperladorosa from "../../assets/numeroteperladorosa.jpeg";
import numgivre1 from "../../assets/numgivre1.jpeg";
import numgivre2 from "../../assets/numgivre2.jpeg";
import numgivre3 from "../../assets/numgivre3.jpeg";
import numgivre4 from "../../assets/numgivre4.jpeg";
import numgivre5 from "../../assets/numgivre5.jpeg";
import numgivre6 from "../../assets/numgivre6.jpeg";
import fluo1 from "../../assets/fluo1.jpeg";
import fluo2 from "../../assets/fluo2.jpeg";
import fluo3 from "../../assets/fluo3.jpeg";
import fluo4 from "../../assets/fluo4.jpeg";
import velper1 from "../../assets/velper1.jpeg";
import velper2 from "../../assets/velper2.jpeg";
import velper3 from "../../assets/velper3.jpeg";
import veltor1 from "../../assets/veltor1.jpeg";
import veltor2 from "../../assets/veltor2.jpeg";
import veltor3 from "../../assets/veltor3.jpeg";
import veltor4 from "../../assets/veltor4.jpeg";
import veltor5 from "../../assets/veltor5.jpeg";
import velgi1 from "../../assets/velgi1.jpeg";
import velgi2 from "../../assets/velgi2.jpeg";
import velgi3 from "../../assets/velgi3.jpeg";
import velgi4 from "../../assets/velgi4.jpeg";
import velgi5 from "../../assets/velgi5.jpeg";
import velgi6 from "../../assets/velgi6.jpeg";
import velgi7 from "../../assets/velgi7.jpeg";
import velgi8 from "../../assets/velgi8.jpeg";
import velgi9 from "../../assets/velgi9.jpeg";
import velgi10 from "../../assets/velgi10.jpeg";
import velgi11 from "../../assets/velgi11.jpeg";
import velgi12 from "../../assets/velgi12.jpeg";
import bengalas from "../../assets/bengalas.jpeg";
import parafina from "../../assets/parafina.webp";
import givre from "../../assets/givre.jpeg";
import acidoestearico from "../../assets/acidoestearico.png";
import ceradesoja from "../../assets/ceradesoja.jpeg";
import colorantes from "../../assets/colorantes.webp";
import presnum from "../../assets/presnum.jpeg";
import blisternumero from "../../assets/blister-num.jpeg";
import presnumgiv from "../../assets/pres-numgiv.jpeg";
import presvelgivcraj from "../../assets/pres-velgivrcaj.jpeg";
import presveltor from "../../assets/presveltor.jpeg";
import presnumperb from "../../assets/presnumperb.jpeg";
import presnumperc from "../../assets/presnumperc.jpeg";
import presfluoc from "../../assets/presfluoc.jpeg";
import presfluob from "../../assets/presfluob.jpeg";
import givree from "../../assets/givre.webp";
import "./styles.css";

const Productos = () => {
  return (
    <div className="container">
      <h2>Productos</h2>
      <h3 className="productos-h3">Números</h3>
      <div className="section-numeros">
        <div className="numeros">
          <div className="grid">
            <div>
              <img src={numerosrojo} alt="numeros" />
            </div>
            <div>
              <img src={numerosrosa} alt="numeros" />
            </div>
            <div>
              <img src={numerosazul} alt="numeros" />
            </div>
            <div>
              <img src={numerosblancos} alt="numeros" />
            </div>
          </div>
          <div className="num-pres">
            <h3 className="pres-h3">Presentaciones</h3>
            <div className="num-pres-div">
              <div>
                <img
                  className="img-pres"
                  src={presnum}
                  alt="presnum"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">En caja de 10u.</p>
              </div>
              <div>
                <img
                  className="img-pres"
                  src={blisternumero}
                  alt="blister"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">Blister individual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="productos-h3">Numerotes PERLADOS</h3>
      <div className="section-numeros">
        <div className="numeros">
          <div className="grid-3">
            <div>
              <img src={numeroteperladoazul} alt="numeroteperlado" />
            </div>
            <div>
              <img src={numeroteperladoblanco} alt="numeroteperlado" />
            </div>
            <div>
              <img src={numeroteperladorosa} alt="numeroteperlado" />
            </div>
          </div>
          <div className="num-pres">
            <h3 className="pres-h3">Presentaciones</h3>
            <div className="num-pres-div">
              <div>
                <img
                  className="img-pres"
                  src={presnumperc}
                  alt="presnum"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">En caja de 10u.</p>
              </div>
              <div>
                <img
                  className="img-pres"
                  src={presnumperb}
                  alt="blister"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">Blister individual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="productos-h3">Numerotes GIVRE</h3>
      <div className="section-numeros">
        <div className="numeros">
          <div className="grid-givre">
            <div>
              <img className="img-numgiv" src={numgivre1} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-numgiv" src={numgivre2} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-numgiv" src={numgivre3} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-numgiv" src={numgivre4} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-numgiv" src={numgivre5} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-numgiv" src={numgivre6} alt="numerotegivre" />
            </div>
          </div>
          <div className="num-pres">
            <h3 className="pres-h3">Presentaciones</h3>
            <div className="num-pres-div">
              <div>
                <img
                  className="img-pres-1"
                  src={presvelgivcraj}
                  alt="presnum"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">En caja de 10u.</p>
              </div>
              <div>
                <img
                  className="img-pres"
                  src={presnumgiv}
                  alt="blister"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">Blister individual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="productos-h3">Números FLUO</h3>
      <div className="section-numeros">
        <div className="numeros">
          <div className="grid">
            <div>
              <img src={fluo1} alt="numerotegivre" />
            </div>
            <div>
              <img src={fluo2} alt="numerotegivre" />
            </div>
            <div>
              <img src={fluo3} alt="numerotegivre" />
            </div>
            <div>
              <img src={fluo4} alt="numerotegivre" />
            </div>
          </div>
          <div className="num-pres">
            <h3 className="pres-h3">Presentaciones</h3>
            <div className="num-pres-div">
              <div>
                <img
                  className="img-pres-1"
                  src={presfluoc}
                  alt="presnum"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">En caja de 10u.</p>
              </div>
              <div>
                <img
                  className="img-pres"
                  src={presfluob}
                  alt="blister"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">Blister individual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="productos-h3">Velones PERLADOS</h3>
      <div className="section-numeros">
        <div className="numeros">
          <div className="grid-3">
            <div>
              <img src={velper1} alt="numerotegivre" />
            </div>
            <div>
              <img src={velper2} alt="numerotegivre" />
            </div>
            <div>
              <img src={velper3} alt="numerotegivre" />
            </div>
          </div>
          <div className="num-pres">
            <h3 className="pres-h3">Presentaciones</h3>
            <div className="num-pres-div">
              <div>
                <img
                  className="img-pres"
                  src={presveltor}
                  alt="presnum"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">En caja de 10u.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="productos-h3">Velones TORNEADOS</h3>
      <div className="section-numeros">
        <div className="numeros">
          <div className="grid">
            <div>
              <img src={veltor1} alt="numerotegivre" />
            </div>
            <div>
              <img src={veltor2} alt="numerotegivre" />
            </div>
            <div>
              <img src={veltor3} alt="numerotegivre" />
            </div>
            <div>
              <img src={veltor4} alt="numerotegivre" />
            </div>
            <div>
              <img src={veltor5} alt="numerotegivre" />
            </div>
          </div>
          <div className="num-pres">
            <h3 className="pres-h3">Presentaciones</h3>
            <div className="num-pres-div">
              <div>
                <img
                  className="img-pres"
                  src={presveltor}
                  alt="presnum"
                  style={{ width: "300px", height: "auto" }}
                />
                <p className="p-card">En caja de 10u.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="productos-h3">Velones GIVRE</h3>
      <div className="section-numeros">
        <div className="numeros">
          <div className="grid-givre">
            <div>
              <img className="img-vel-giv" src={velgi1} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi2} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi3} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi4} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi5} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi6} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi7} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi8} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi9} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi10} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi11} alt="numerotegivre" />
            </div>
            <div>
              <img className="img-vel-giv" src={velgi12} alt="numerotegivre" />
            </div>
          </div>
          <div className="num-pres">
            <h3 className="pres-h3">Presentaciones</h3>
            <div className="num-pres-div">
              <div>
                <p className="p-card">Blister de 6u.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="productos-h3">Bengalas</h3>
      <div className="section-numeros">
        <div className="numeros">
          <div className="">
            <div>
              <img className="img-insu" src={bengalas} alt="numerotegivre" />
            </div>
          </div>
          <div className="num-pres">
            <h3 className="pres-h3">Presentaciones</h3>
            <div className="num-pres-div">
              <div>
                <p className="p-card">Pack surtido 4u.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="categoria-9">
        <h3 className="productos-h3">Insumos</h3>
      </div>
      <div className="section-numeros">
        <div className="grid-3">
          <div className="card-insu">
            <img className="img-insu" src={parafina} alt="parafina" />
            <p className="p-card">Parafina</p>
          </div>
          <div className="card-insu">
            <img className="img-insu" src={givree} alt="givre" />
            <p className="p-card">Givre</p>
          </div>
          <div className="card-insu">
            <img className="img-insu" src={acidoestearico} alt="ae" />
            <p className="p-card">Ácido esteárico</p>
          </div>
          <div className="card-insu">
            <img className="img-insu" src={ceradesoja} alt="cerasoja" />
            <p className="p-card">Cera de soja</p>
          </div>
          <div className="card-insu">
            <img className="img-insu" src={colorantes} alt="colorantes" />
            <p className="p-card">Colorantes</p>
          </div>
        </div>
        <div className="num-pres">
          <h3 className="pres-h3">Colores</h3>
          <div className="num-pres-div">
            <div>
              <img
                src={givre}
                alt="presnum"
                style={{ width: "400px", height: "auto" }}
              />
              <p className="p-card"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
