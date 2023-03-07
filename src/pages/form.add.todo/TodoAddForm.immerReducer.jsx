export const INITIAL_STATE = {
    todo_title: "",
    todo_due: "",
}

export const todoFormImmerReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODO_TITLE":
            state.todo_title = action.payload
        break
        case "SET_TODO_DUE":
            state.todo_due = action.payload
            break
        default:
            break
    }
}