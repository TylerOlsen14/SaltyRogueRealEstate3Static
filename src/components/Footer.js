import React from "react";
import Finn from "../assets/Images/Finn.jpg";
import Logo from '../assets/Images/logo.jpg'
import { FaPhoneSquare, FaGithubSquare, FaEnvelope } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="SaltyRogue">
        <div className="img">
          <img
            src={Logo}
            alt="Salty Rogue Real Estate"
            style={{ width: "5rem", marginRight: "1rem" }}
          />
        </div>
        <div className="title">
          Salty Rogue Real Estate <br/>
        </div>
        <div className="contactContainer">
          <strong>Contact Becky & Rob Brown: </strong>
          <br/>
          <FaPhoneSquare /> | (801) 123-4567
          <br/>
          <FaEnvelope /> | SantaClause72@gmail.com
        </div>
      </div>
      <div className="captainFinn">
        <div className="firm">
          <div className="img">
            <img
              src={Finn}
              style={{ width: "5rem", marginRight: "1rem" }}
            />
          </div>
          <div className="titleFinn">
            Tucker, Finn, & Co.
            <br /> Web Design
          </div>
        </div>
        <div className="contactContainer">
          <strong>
            <p>
              Contact:
              <br />
              <FaPhoneSquare /> | (801) 661-9191
              <br />
              <FaEnvelope /> | Tyler.Olsen1@gmail.com
              <br />
              <FaGithubSquare /> | https://github.com/TylerOlsen14
              <br />
            </p>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Footer;
