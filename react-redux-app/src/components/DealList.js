// Import Dependencies
import React from "react";
import { connect } from "react-redux";

// Import Components
import DealBox from "./DealBox";

// Import Assets
import loadingImg from "../assets/loading.png";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";

// Import Actions
import { loadGameDeals } from "../store/actions/index";

function DealList(props) {
  // Function to change sorting and Desc order
  const sortItems = (type) => {
    let desc;

    if (type === props.sortBy) {
      desc = props.desc ? 0 : 1;
    } else {
      console.log("Apply Ascending Order");
      desc = 0;
    }

    const queryParams = {
      minPrice: props.minPrice,
      maxPrice: props.maxPrice,
      sortBy: type,
      desc: desc,
    };

    props.loadGameDeals(queryParams);
  };

  // Component for the heading display
  const currentOrder = props.desc;
  const orderBy = props.sortBy;

  const ListHeading = (props) => {
    return (
      <div className={props.class} onClick={() => sortItems(props.title)}>
        {props.title}

        {orderBy === props.title ? (
          !currentOrder ? (
            <img src={downArrow} alt='' />
          ) : (
            <img src={upArrow} alt='' />
          )
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <div className='deals-list'>
      <div className='container'>
        <div className='query'>
          Searching Price Range ${props.minPrice} - ${props.maxPrice}
          <br />
          Sorted By: {props.sortBy}
        </div>

        <div className='heading-list'>
          <ListHeading
            title='Savings'
            class='savings-percent'
            desc={props.desc}
          />
          <ListHeading title='Price' class='price' desc={props.desc} />
          <ListHeading title='Title' class='title' desc={props.desc} />

          <div className='release-date'>Released</div>

          <ListHeading title='Reviews' class='rating' desc={props.desc} />

          <div className='redirect-link'></div>
        </div>

        {props.isLoading ? (
          <div className='no-results'>
            <img src={loadingImg} alt='Loading Data' />
          </div>
        ) : (
          props.deals.length > 0 &&
          props.deals.map((deal) => {
            return <DealBox deal={deal} key={deal.dealID} />;
          })
        )}

        {props.deals.length === 0 && !props.isLoading && (
          <div className='no-results'>No results found</div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    deals: state.deals,
    isLoading: state.isLoading,
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    sortBy: state.sortBy,
    desc: state.desc,
  };
};

export default connect(mapStateToProps, { loadGameDeals })(DealList);
