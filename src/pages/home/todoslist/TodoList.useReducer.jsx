export const todoReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        case "SET_TODOS":
            return { ...state, todos: action.payload };
        case "SET_STATUS":
            return { ...state, isStatus: action.payload };
        default:
            return state;
    }
}