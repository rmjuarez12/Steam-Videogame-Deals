// Import Dependencies
import React from "react";
import { connect } from "react-redux";

// Import Components
import DealBox from "./DealBox";

function DealList(props) {
  return (
    <div className='deals-list'>
      <div className='container'>
        <div className='heading-list'>
          <div className='savings-percent'>Savings</div>

          <div className='price'>Price</div>

          <div className='title'>Title</div>

          <div className='release-date'>Released</div>

          <div className='rating'>Steam Rating</div>

          <div className='redirect-link'></div>
        </div>

        {props.isLoading && <div>Loading Data</div>}

        {props.deals.length > 0 &&
          props.deals.map((deal) => {
            return <DealBox deal={deal} key={deal.dealID} />;
          })}

        {props.deals.length === 0 && !props.isLoading && "No results found"}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    deals: state.deals,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(DealList);
