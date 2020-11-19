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
    const sliderTL = gsap.timeline();
    sliderTL.from(".slider", { opacity: 0, scale: 1.2, duration: 2 });
    sliderTL.from(".slider h3", { opacity: 0, scale: 1.2, duration: 1 });
    sliderTL.from(
      ".slider .deals-form",
      { opacity: 0, y: 100, duration: 1 },
      2.5
    );
  }, []);

  return (
    <div className='slider' style={{ backgroundImage: `url(${bgSlide})` }}>
      <h3>Search for best video game deals</h3>

      <DealsForm buttonTxt='- Press Start -' />
    </div>
  );
}
