import React, { useState } from "react"
import axios from "axios"
import useSWR, { mutate } from "swr"
import TodosListView from "./TodosList.view"
import Swal from "sweetalert2"
import TodoListSkeleton from "./TodoList.skeleton"

const TodosListContainer = () => {
    const [isStatus, setIsStatus] = useState(1)

    // Fetch SWR
    const fetcher = url => axios.get(url).then(res => res.data)   
    const { data, error, isLoading } = useSWR('http://localhost:3006/todos', fetcher)
    const sliceTodos = data?.slice(0,5)

    const deleteData = async (id) => {
          try {
              const response = await axios.delete(`http://localhost:3006/todos/${id}`);
              return response.data;
          } catch (error) {
              console.error(error);
          }
      }

    // Handle Change Status Todo
    const ChangeStatus = async (id, event) => {
        await axios.patch(`http://localhost:3006/todos/${id}`, {
            status:'complete'
        })
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Todo marked as complete successfully.',
                showConfirmButton: false,
                timer:1500
            })
                setTimeout(() => {    
                    window.location.reload()           
                }, 2000);
        }).catch((error) => {
            console.log(error)
        })
    }  

    // handleDelete
    const handleDelete = async (id) => {
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
                title: 'Todo deleted successfully.',
                showConfirmButton: false,
              })        
              setTimeout(() => {
                window.location.reload()
              }, 1000)
            }
          } catch (error) {
            console.log(error)
          }
    }

    if (error) return <div>failed to load</div>
    if (isLoading) return <TodoListSkeleton data={6}/>

    // filterTodos
    const filterStatusTodo = data.filter(row => row.status === 'todo')
    const filterStatusComplete = data.filter(row => row.status === 'complete')
    
    return <TodosListView DeleteTodo={handleDelete} isLoading={isLoading} todos={sliceTodos} filterStatusTodo={filterStatusTodo} filterStatusComplete={filterStatusComplete} filterTodoButton={() => setIsStatus(1)} filterCompleteButton={() => setIsStatus(2)} isStatus={isStatus} ChangeStatus={ChangeStatus} />
    
}

export default TodosListContainer