import {
    query,
    collection,
    doc,
    onSnapshot,
    addDoc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import db from "../utils/firebase";

const deleteProduct = async id => {
    await deleteDoc(doc(db, "products", id));
};
const updateProduct = async (id, obj) => {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, obj);
};
const initialValue = { products: [] };
//state - current state
//action = {type:"WHAT TO DO", [payload:value]}

const productsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "PRODUCTS/LOAD": {
            return { ...state, products: action.payload };
        }
        case "PRODUCTS/DELETE": {
            const products = state.products.filter(
                prod => prod.id !== action.payload
            );
            deleteProduct(action.payload);
            return { ...state, products };
        }
        case "PRODUCTS/UPDATE": {
            const { id } = action.payload;

            updateProduct(id, action.payload);

            const products = [...state.products];
            const index = products.findIndex(
                product => product.id === action.payload.id
            );
            if (index !== 1) {
                products[index] = action.payload;
            }

            return { ...state, products };
        }
        default:
            return state;
    }
};

export default productsReducer;
