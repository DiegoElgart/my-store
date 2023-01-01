import { addDoc, collection } from "firebase/firestore";
import db from "../utils/firebase";

const initialValue = { purchases: [] };

//state - current state
//action = {type:"WHAT TO DO", [payload:value]}
const addPurchase = async obj => {
    const docRef = await addDoc(collection(db, "purchases"), obj);
    console.log(docRef.id);
};

const purchasesReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "PURCHASES/LOAD":
            return { ...state, purchases: action.payload };
        case "PURCHASES/NEW":
            addPurchase(action.payload);
            const purchases = [...state.purchases, action.payload];
            return { ...state, purchases };
        default:
            return state;
    }
};

export default purchasesReducer;
