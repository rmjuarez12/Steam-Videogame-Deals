// Import Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";

// Import Actions
import { loadDataForLocation } from "../store/actions/index";

function DealsForm(props) {
  // Set an initial state
  const initalState = {
    minPrice: "",
    maxPrice: "",
    sortBy: "Title",
  };

  // Set the states for Min/Max Price
  const [getDeal, setGetDeal] = useState(initalState);

  // Handle input change
  const handleChange = (e) => {
    setGetDeal({ ...getDeal, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmission = (e) => {
    e.preventDefault();

    props.loadDataForLocation(getDeal);
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type='number'
          name='minPrice'
          placeholder='Enter Min Price'
          onChange={handleChange}
          value={getDeal.minPrice}
        />

        <input
          type='number'
          name='maxPrice'
          placeholder='Enter Max Price'
          onChange={handleChange}
          value={getDeal.maxPrice}
        />

        <select name='sortBy' onChange={handleChange} value={getDeal.sortBy}>
          <option value='Title'>Title</option>
          <option value='Price'>Price</option>
          <option value='Release'>Released Date</option>
          <option value='Deal Rating'>Best Deals</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default connect("", { loadDataForLocation })(DealsForm);
