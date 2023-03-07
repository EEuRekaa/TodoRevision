// import React from "react"
// import { useEffect } from "react"
// import axios from "axios"
// import TodosListView from "./TodosListContainer"
// import { useState } from "react"
// import useSWR from "swr"

// const TodosListContainer = () => {
//     const [todos, setTodos] = useState([])

//     const fetcher = async (url) => {
//       const response = await axios.get(url)
//       return response.data
//     }

//     const { data, error, isLoading } = useSWR('http://localhost:3006/todos', fetcher)

//     if (error) return <div>failed to load</div>
//     if (isLoading) return <div>loading...</div>

//     // useEffect(() => {
//     //     axios.get('http://localhost:3006/todos')
//     //       .then((response) => {
//     //         setCountTodo(response.data.length)
//     //         const sliceTODO = response.data.slice(0,6)
//     //         setTodos(sliceTODO)
//     //       })
//     //       .catch(error => {
//     //         console.log(error)
//     //       })
//     // }, [todos])

//     return <TodosListView datas={todos} />
// }

// export default TodosListContainer