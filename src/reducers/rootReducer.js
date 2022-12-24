import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import customersReducer from "./customersReducer";
import purchasesReducer from "./purchasesReducer";
import isLoggedInReducer from "./isLoggedReducer";

const rootReducer = combineReducers({
    productsReducer,
    customersReducer,
    purchasesReducer,
    isLoggedInReducer,
});

export default rootReducer;
