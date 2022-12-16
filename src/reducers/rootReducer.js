import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import customersReducer from "./customersReducer";

const rootReducer = combineReducers({
    productsReducer,
    customersReducer,
});

export default rootReducer;
