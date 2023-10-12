import React from "react";
import logo from "../../assets/logo-goout.svg";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="logo goout" />
          <h2>Goout</h2>
        </div>
      </nav>
    </header>
  );
}
