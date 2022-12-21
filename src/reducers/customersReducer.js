import {
    query,
    collection,
    doc,
    onSnapshot,
    addDoc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import { act } from "react-dom/test-utils";
import db from "../utils/firebase";

const deleteCustomer = async id => {
    await deleteDoc(doc(db, "customers", id));
};
const updateCustomer = async (id, obj) => {
    const docRef = doc(db, "customers", id);
    await updateDoc(docRef, obj);
};
const initialValue = { customers: [] };

//state - current state
//action = {type:"WHAT TO DO", [payload:value]}

const customersReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "CUSTOMERS/LOAD":
            return { ...state, customers: action.payload };
        case "CUSTOMERS/DELETE": {
            const customers = state.customers.filter(
                cust => cust.id !== action.payload
            );
            deleteCustomer(action.payload);
            return { ...state, customers };
        }
        case "CUSTOMERS/UPDATE": {
            const { id } = action.payload;
            updateCustomer(id, action.payload);

            const customers = [...state.customers];
            const index = customers.findIndex(
                customer => customer.id === action.payload.id
            );
            if (index !== 1) {
                customers[index] = action.payload;
            }
            return { ...state, customers };
        }
        default:
            return state;
    }
};

export default customersReducer;
