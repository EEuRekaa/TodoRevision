export const INITIAL_STATE = {
    todo_title: "",
}

export const detailTodoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODO_TITLE":
            state.todo_title = action.payload;
            break;
        default:
            break;
    }
}