import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import { INITIAL_STATE, todoFormImmerReducer } from "./TodoAddForm.immerReducer"
import { useImmerReducer } from "use-immer"
import FormAddTodoView from "./FormAddTodo.view"

const FormAddTodoContainer = () => {    
    const navigate = useNavigate()
    const [state, dispatch] = useImmerReducer(todoFormImmerReducer, INITIAL_STATE)

    const handleTitleChange = (event) => {
        dispatch({ type: "SET_TODO_TITLE", payload: event.target.value })
    }

    const handleDueChange = (event) => {
        dispatch({ type: "SET_TODO_DUE", payload: event.target.value })
    }
      
    // handle Submit
    const handleSubmit = (event) => {
        event.preventDefault() 
        axios.post('http://localhost:3006/todos', {
            todo_title:state.todo_title, 
            todo_due:state.todo_due, 
            status:"todo"
        }).then(() => {            
            Swal.fire({
                icon: 'success',
                title: 'Your to-do has been saved.',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(() => {                
                navigate('/')
            }, 2000);
        }).catch((error) => {
            console.log(error)
        })
    }
      
    return <FormAddTodoView submit={handleSubmit} todoTitle={handleTitleChange} todoDue={handleDueChange} />

}

export default FormAddTodoContainer;