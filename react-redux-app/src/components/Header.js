// Import Dependencies
import React from "react";

// Import Assets
import logo from "../assets/vg-logo.png";

export default function Header() {
  return (
    <header>
      <div className='inner-header'>
        <div className='logo'>
          <img src={logo} alt='Video Games Deals' />
        </div>

        <div className='header-title'>
          <h1>Search for best video game deals</h1>
        </div>
      </div>
    </header>
  );
}
