import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { ConfigureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

/* store.dispatch({ type: "account/deposit", payload: 500 });
console.log("Hi");
console.log(store.getState());
store.dispatch({ type: "account/withdraw", payload: 200 });
console.log(store.getState());
store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 1000, purpose: "Car" },
});
console.log(store.getState());
store.dispatch({ type: "account/payLoan" });
console.log(store.getState()); */
export default store;
