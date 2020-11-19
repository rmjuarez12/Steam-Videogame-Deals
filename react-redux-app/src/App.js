// Import Dependencies
import React, { useEffect } from "react";
import { gsap } from "gsap";

// Import Assets
import "./App.css";

// Import Components
import DealList from "./components/DealList";
import DealsForm from "./components/DealsForm";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  // Add some initial effects upon rendering
  useEffect(() => {
    gsap.from("header", { opacity: 0, y: -100, duration: 1 });
  }, []);

  return (
    <div className='App'>
      <Header />
      <Slider />

      <DealsForm />
      <DealList />
    </div>
  );
}

export default App;
