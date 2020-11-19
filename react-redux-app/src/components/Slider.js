// Import Dependencies
import React, { useEffect } from "react";
import { gsap } from "gsap";

// Import Assets
import bgSlide from "../assets/Nice-Battlefield-4.jpg";

// Import Components
import DealsForm from "../components/DealsForm";

export default function Slider() {
  // Apply effects upon rendering
  useEffect(() => {
    gsap.from(".slider", {
      opacity: 0,
      scale: 1.5,
      duration: 2,
    });
  }, []);

  return (
    <div className='slider' style={{ backgroundImage: `url(${bgSlide})` }}>
      <h3>Search for best video game deals</h3>

      <DealsForm />
    </div>
  );
}
