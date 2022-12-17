const initialValue = { purchases: {} };

//state - current state
//action = {type:"WHAT TO DO", [payload:value]}

const purchasesReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "PURCHASES/LOAD":
            return { ...state, purchases: action.payload };
        default:
            return state;
    }
};

export default purchasesReducer;
