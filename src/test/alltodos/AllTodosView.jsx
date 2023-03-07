import React from "react"
import useSWR from "swr"
import axios from "axios"

const AllTodosView = () => {

    const fetcher = url => axios.get(url).then(res => res.data)
   
    const { data, error, isLoading } = useSWR('http://localhost:3006/todos/', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <div className="lg:flex justify-center">
            <div className="bg-white rounded-md shadow-md px-4 py-10 lg:px-6 lg:w-1/2">      
            {data.map((todos) => (
                <div>
                    <h1>{todos.todo_title}</h1>
                </div> 
            ))} 
            </div>
        </div>
    )
}

export default AllTodosView