import React from "react";
import Finn from '../assets/Images/Finn.jpg';
import {
  FaPhoneSquare,
  FaGithubSquare,
  FaEnvelope,
} from 'react-icons/fa';

import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      {/* <nav class="navbar navbar-expand-lg container"> */}
      <nav className="container">
        <a class="navbar-brand" href="#">
        <img
          src={Finn}
          style={{width:'5rem', marginRight:'1rem'}}
        />
          Tucker & co. Web Design
        </a>
        <div className="contactContainer">
      <strong>
        <p>Contact:
        <br/>
        <FaPhoneSquare /> | (801) 661-9191
        <br/>
        <FaEnvelope /> | Tyler.Olsen1@gmail.com
        <br/>
        <FaGithubSquare /> | https://github.com/TylerOlsen14
        <br/>
        </p>
      </strong>
    </div>
      </nav>
    </div>
  );
}

export default Footer;
