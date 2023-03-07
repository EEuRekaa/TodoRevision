import React from "react"
import "./TodosList.style.css"
import { Link } from "react-router-dom"
import "../../../styles/styles.css"

const TodosListView = ({ filterStatusTodo, filterStatusComplete, filterTodoButton, filterCompleteButton, isStatus, ChangeStatus}) => {

    const Tododata = () => {
        return(
            <>
                <h1 className="mb-1 mt-1 font-bold text-md text-gray-700">Showing To do</h1>
                <div className="overflow-auto h-[230px] sm:h-[350px]">
                    <div className="flex-shrink-0">  
                        <div className="sm:grid grid-cols-2 gap-x-2">
                            {filterStatusTodo.map((data) => (
                            <div className="block max-w-sm p-5 bg-gray-100 bg-opacity-50 border border-gray-700 drop-shadow-sm rounded-lg shadow hover:bg-gray-200 hover:bg-opacity-50 mt-2" key={data.id}>
                                <div className="flex items-center justify-between">
                                    <h1 className="text-normal text-lg font-bold tracking-tight text-gray-800">{data.todo_title}</h1>   
                                    <div className="flex-shrink-0">                    
                                        <button onClick={() => ChangeStatus(data.id) } className="mr-3"><i className="fa-solid fa-check text-xl opacity-95"></i></button>
                                        <Link to={`/detailTodo/${data.id}`}><button><i className="fas fa-edit text-xl opacity-95"></i></button></Link>  
                                    </div>      
                                </div>                    
                                <div>
                                    <p className="inline-flex text-sm">Due {data.todo_due}</p>
                                </div>                                          
                            </div>     
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const Completedata = () => {
        return(
            <>
                <h1 className="mb-1 mt-1 font-bold text-md text-gray-700">Showing Completed To do</h1>
                <div className="overflow-auto h-[250px] sm:h-64">
                    <div className="flex-shrink-0">  
                        <div className="sm:grid grid-cols-2 gap-x-4">
                            {filterStatusComplete.map((data) => (
                                <div className="block max-w-sm p-5 bg-green-400 bg-opacity-50 border border-gray-700 drop-shadow-sm rounded-lg shadow hover:bg-green-500 hover:bg-opacity-50 mt-2" key={data.id}>
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-normal text-lg font-bold tracking-tight text-gray-800">{data.todo_title}</h1>   
                                        <div className="flex-shrink-0">     
                                            <Link to={`/detailTodo/${data.id}`}><button><i className="fas fa-edit text-xl opacity-95"></i></button></Link>   
                                        </div>      
                                    </div>                         
                                    <div>
                                    <p className="inline-flex text-sm">Due {data.todo_due}</p>
                                    </div>                                                
                                </div>  
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="w-full lg:w-full">     
            <div className="bg-white rounded-md shadow-md px-4 py-4 mt-4 lg:px-6">
                <button className="btn-group-left" onClick={filterTodoButton}>To do</button>
                <button className="btn-group-right" onClick={filterCompleteButton}>Complete</button>
                { isStatus === 1 ? <Tododata /> : isStatus === 2 ? <Completedata /> : <Tododata />}        
            </div>
        </div> 
    )
}
export default TodosListView