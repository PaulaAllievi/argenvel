import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

const contact = () => {
  return (
    <div className="contact">
      <div>
        <FontAwesomeIcon
          icon={faPhone}
          style={{ color: "#ffffff", fontSize: "28px" }}
        />
      </div>
      <div className="atencion">
        <h3>ATENCION AL CLIENTE</h3>
        <p>Tel: (011) 4754-4838</p>
      </div>
    </div>
  );
};

export default contact;
