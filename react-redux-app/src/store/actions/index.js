// Import Dependencies
import axios from "axios";

// Declare the action variables to export
export const IS_LOADING = "IS_LOADING";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";

export const loadGameDeals = (price) => (dispatch) => {
  // Dispatch an action to bring in the loading text
  dispatch({
    type: IS_LOADING,
  });

  // API URL to get the data from
  const apiURL = `https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=${price.minPrice}&upperPrice=${price.maxPrice}&sortBy=${price.sortBy}&desc=${price.desc}`;

  // Get the data
  axios
    .get(apiURL)
    .then((response) => {
      console.log("Deals Data:", response);

      dispatch({
        type: DATA_LOAD_SUCCESS,
        payload: {
          minPrice: price.minPrice,
          maxPrice: price.maxPrice,
          data: response.data,
          sortBy: price.sortBy,
          desc: price.desc,
        },
      });
    })
    .catch((error) => {
      console.log("Deals API error", error);
    });
};
