import React from "react"
import axios from "axios"
import useSWR from "swr"
import AllTodosView from "./AllTodos.view.jsx"
import Swal from "sweetalert2"

const AllTodosContainer = () => {
    // SWR
    const fetcher = url => axios.get(url).then(res => res.data)
   
    const { data, error, isLoading } = useSWR('http://localhost:3006/todos?_sort=id&_order=asc', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

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

    // Filter
    const filterStatusTodo = data.filter(row => row.status === 'todo')
    const filterStatusComplete = data.filter(row => row.status === 'complete')

    // sort Data
    const sortedData = data.sort((a, b) => {
        if (a.status === "todo" && b.status !== "todo") return -1
        if (a.status !== "todo" && b.status === "todo") return 1
        return 0;
    })
    
    return <AllTodosView dataTodo={sortedData} filterStatusTodo={filterStatusTodo} filterStatusComplete={filterStatusComplete} ChangeStatus={ChangeStatus} />
}

export default  AllTodosContainer