const initialValue = { products: [] };

//state - current state
//action = {type:"WHAT TO DO", [payload:value]}

const productsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "PRODUCTS/LOAD":
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

export default productsReducer;
