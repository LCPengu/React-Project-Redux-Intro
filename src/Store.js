import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

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

/* store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, "Car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer("John Doe", "123456789"));
console.log(store.getState());
store.dispatch(updateCustomerName("Jane Doe"));
console.log(store.getState()); */
