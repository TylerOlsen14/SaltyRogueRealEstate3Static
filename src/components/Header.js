import React from "react";
import Logo from '../assets/Images/logo.jpg'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="/">
        <img
          src={Logo}
          style={{width:'2rem', marginRight:'1rem'}}
        />
          Salty Rogue Real Estate
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">
                Contact
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Properties
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/EmmaStreet">
                  Emma Street
                </a>
                <a class="dropdown-item" href="/LaurelStreet">
                  Laurel Street
                </a>
                {/* <div class="dropdown-divider" />
                <a class="dropdown-item" href="#">
                  Something else here
                </a> */}
              </div>
            </li>
            {/* <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
