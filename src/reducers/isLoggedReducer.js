const initialValue = { currentUser: { user: {} } };

const isLoggedInReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "LOGIN": {
            return { ...state, currentUser: action.payload };
        }
        case "LOGOUT": {
            return { ...state, currentUser: { user: { isLoggedIn: false } } };
        }

        default:
            return state;
    }
};

export default isLoggedInReducer;
