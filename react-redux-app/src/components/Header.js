// Import Dependencies
import React from "react";

// Import Assets
import logo from "../assets/vg-logo.png";

// Import Components
import DealsForm from "./DealsForm";

export default function Header() {
  return (
    <header>
      <div className='inner-header'>
        <div className='logo'>
          <img src={logo} alt='Video Games Deals' />
        </div>

        <div className='header-form'>
          <DealsForm buttonTxt='- Search -' />
        </div>
      </div>
    </header>
  );
}
