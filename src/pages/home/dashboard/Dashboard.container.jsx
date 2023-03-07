import axios from "axios";
import React from "react";
import DashboardView from "./Dashboard.view";
import useSWR from "swr"
import DashboardSkeleton from "./Dashboard.skeleton"

const DashboardContainer = () => {
    // SWR
    const fetcher = url => axios.get(url).then(res => res.data)   
    const { data, error, isLoading } = useSWR('http://localhost:3006/todos', fetcher)

    // Count data
    const countAllTodo = data?.length

    // Filter todo
    const countTodos = data?.filter(row => row.status === 'todo').length
    const countCompleteTodo = data?.filter(row => row.status === 'complete').length

    if (error) return <div>failed to load</div>
    if (isLoading) return <DashboardSkeleton />

    return <DashboardView countTodos={countTodos} countCompleteTodo={countCompleteTodo} countAllTodo={countAllTodo} />
}

export default DashboardContainer