import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import customersReducer from "./customersReducer";
import purchasesReducer from "./purchasesReducer";

const rootReducer = combineReducers({
    productsReducer,
    customersReducer,
    purchasesReducer,
});

export default rootReducer;
