const initialValue = { currentUser: { user: {} } };

const isLoggedInReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                currentUser: {
                    ...action.payload,
                    isAuthenticated: true,
                },
            };
        }
        case "LOGOUT": {
            return {
                ...state,
                currentUser: { isAuthenticated: false },
            };
        }

        default:
            return state;
    }
};

export default isLoggedInReducer;
