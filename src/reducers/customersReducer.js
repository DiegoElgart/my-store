const initialValue = { customers: [] };

//state - current state
//action = {type:"WHAT TO DO", [payload:value]}

const customersReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "CUSTOMERS/LOAD":
            return { ...state, customers: action.payload };
        default:
            return state;
    }
};

export default customersReducer;
