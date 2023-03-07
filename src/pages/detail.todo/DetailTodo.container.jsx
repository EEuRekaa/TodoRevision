import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import DetailTodoView from "./DetailTodo.view"
import { detailTodoReducer, INITIAL_STATE } from "./DetailTodo.useReducer"
import useSWR, { mutate } from 'swr'
import { useImmerReducer } from "use-immer"

const DetailTodoContainer = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    // Dropdown
    const Dropdown = (...classes) => {
        return classes.filter(Boolean).join('')
    }
      
    // immer Reducer
    const [state, dispatch] = useImmerReducer(detailTodoReducer, INITIAL_STATE)

    const handleTitleChange = (event) => {
        dispatch({ type: "SET_TODO_TITLE", payload: event.target.value })
    }

    //SWR
    const fetcher = url => axios.get(url).then(res => res.data)   
    const { data, error, isLoading } = useSWR(`http://localhost:3006/todos/${id}`, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <></>
    
    // handle Edit
    const handleEdit = (event) => {
        event.preventDefault()
        axios.patch(`http://localhost:3006/todos/${id}`, {
            todo_title:state.todo_title
        }).then((response) => {
            Swal.fire({
                icon: 'success',
                title: 'Your to-do has been successfully updated.',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(() => {
            }, 1500);
        }).catch((error) => {
            console.log(error)
        })
    }

    // handle Delete
    const deleteData = async () => {
        try {
          const response = await axios.delete(`http://localhost:3006/todos/${id}`);
          return response.data;
        } catch (error) {
          console.error(error);
        }
      }

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            const result = await Swal.fire({
                title: 'Delete todo',
                text: "Are you sure that you want to delete your todo?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            })
        
            if (result.isConfirmed) {
                deleteData(id)
                mutate('http://localhost:3006/todos/')
        
                Swal.fire({
                    icon: 'success',
                    title: 'Todo deleted',
                    showConfirmButton: false,
                    timer:1500
                })        
                setTimeout(() => {                
                }, 1000)
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }
      
    return <DetailTodoView Dropdown={Dropdown} handleDelete={handleDelete} handleInputChange={handleTitleChange} valueTodoTitle={state.todo_title || data.todo_title} valueTodoDue={state.todo_due || data.todo_due} handleEdit={handleEdit} handleTitleChange={handleTitleChange} />
}

export default DetailTodoContainer