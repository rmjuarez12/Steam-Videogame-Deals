// Import Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";
import useSound from "use-sound";

// Import Actions
import { loadGameDeals } from "../store/actions/index";

// Import Assets
import pressStart from "../assets/press-start.wav";
import quitSound from "../assets/exit.wav";

function DealsForm(props) {
  // Set an initial state
  const initalState = {
    minPrice: "",
    maxPrice: "",
    sortBy: props.sortBy,
    desc: 0,
  };

  // Setup sounds to play
  const [play] = useSound(pressStart, { volume: 0.4 });
  const [quitSfx] = useSound(quitSound, { volume: 0.7 });

  // Setup a state to disable the search for a bit
  const [disableBtn, setDisableBtn] = useState(false);

  // Set the states for Min/Max Price
  const [getDeal, setGetDeal] = useState(initalState);

  // Handle input change
  const handleChange = (e) => {
    setGetDeal({
      ...getDeal,
      [e.target.name]: e.target.value,
      sortBy: props.sortBy,
      desc: props.desc,
    });
  };

  // Function to close list
  const closeList = () => {
    gsap.to(".deals-list", {
      opacity: 0,
      y: "100vh",
      display: "none",
      duration: 1,
    });
    gsap.to(".header-form", {
      height: 0,
      duration: 2,
    });
    gsap.to(".slider h3", { opacity: 1, scale: 1, duration: 1, delay: 1 });
    gsap.to(".deals-form", { opacity: 1, y: 0, duration: 1, delay: 1 });

    quitSfx();
  };

  // Handle form submission
  const handleSubmission = (e) => {
    e.preventDefault();
    play();

    setDisableBtn(true);

    props.loadGameDeals(getDeal);

    gsap.to(".slider h3", { opacity: 0, scale: 1.2, duration: 2 });

    gsap.to(".slider .deals-form", { opacity: 0, y: 100, duration: 2 });

    gsap.to(".deals-list", {
      opacity: 1,
      y: 0,
      display: "block",
      duration: 2,
      delay: 1.5,
    });

    gsap.to(".header-form", {
      height: "auto",
      duration: 2,
      delay: 1.5,
    });

    setTimeout(() => {
      setDisableBtn(false);
    }, 1000);

    setGetDeal(initalState);
  };

  return (
    <div className='deals-form'>
      <form onSubmit={handleSubmission}>
        <div className='close-btn' onClick={closeList}>
          Quit
        </div>

        <fieldset>
          <input
            type='number'
            name='minPrice'
            placeholder='Min Price'
            onChange={handleChange}
            value={getDeal.minPrice}
          />

          <input
            type='number'
            name='maxPrice'
            placeholder='Max Price'
            onChange={handleChange}
            value={getDeal.maxPrice}
          />
        </fieldset>

        <button disabled={disableBtn}>{props.buttonTxt}</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sortBy: state.sortBy,
    desc: state.desc,
  };
};

export default connect(mapStateToProps, { loadGameDeals })(DealsForm);
