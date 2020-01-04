import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const intialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (action, state) => {
  return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (action, state) => {
  return updateObject(state, { loading: true });
};

const purchaseBurgerSuccess = (action, state) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    ...state,
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const purchaseBurgerFail = (action, state) => {
  return updateObject(state, { loading: false });
};

const fetchOrdersStart = (action, state) => {
  return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false
  });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(action, state);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(action, state);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(action, state);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(action, state);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(action, state);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(action, state);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(action, state);
    default:
      return state;
  }
};

export default reducer;
