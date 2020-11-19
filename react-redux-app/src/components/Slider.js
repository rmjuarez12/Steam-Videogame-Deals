// Import Dependencies
import React from "react";

// Import Assets
import bgSlide from "../assets/Nice-Battlefield-4.jpg";

export default function Slider() {
  return (
    <div className='slider'>
      <div className='bgSlide'>
        <img src={bgSlide} alt='' />
      </div>

      <h3>Search for best video game deals</h3>
    </div>
  );
}
