import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { accountReducer, customerReducer } });

export default store;
