import React from "react";
import { NavLink } from "react-router-dom";
import logonav from "../../assets/logonav.png";
import "./styles.css";
import DropdownMenu from "../DropdownMenu";

const Navbar = () => {
  return (
    <div className="body-header">
      <header className="header">
        <div className="nav-left">
          <img className="logo-nav" src={logonav} alt="logo" />
          <NavLink className="logo-text" to="/">
            FABRICA DE VELAS
          </NavLink>
        </div>{" "}
        <nav>
          <div className="dropdown">
            <DropdownMenu />
          </div>
          <ul className="nav-ul">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/productos">Productos</NavLink>
            </li>
            <li>
              <NavLink to="/nosotros">Nosotros</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
