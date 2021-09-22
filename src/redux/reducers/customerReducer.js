import * as types from "../contantstan/customer";

const initialState = {
  customer: [],
  createdCustomer: [],
  totalPage: 1,
  loading: false,
};

const customerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_CUSTOMERS_REQUEST:
    case types.CREATE_CUSTOMERS_REQUEST:
      return { ...state, loading: true };
    case types.GET_CUSTOMERS_SUCCESS:
      return { ...state, loading: false, customer: payload };
    case types.CREATE_CUSTOMERS_SUCCESS:
      return { ...state, loading: false, createdCustomer: payload };
    case types.GET_CUSTOMERS_FAILURE:
    case types.CREATE_CUSTOMERS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default customerReducer;
