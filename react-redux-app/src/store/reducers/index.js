// Import action types
import { IS_LOADING, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from "../actions";

// SEtup initial state
const initialState = {
  deals: [],
  isLoading: false,
  listActive: false,
  errors: "",
  minPrice: 0,
  maxPrice: 0,
  sortBy: "Title",
  desc: 0,
};

const dealsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
        deals: [],
      };

    case DATA_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deals: payload.data,
        minPrice: payload.minPrice,
        maxPrice: payload.maxPrice,
        sortBy: payload.sortBy,
        desc: payload.desc,
      };

    case DATA_LOAD_ERROR:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default dealsReducer;
