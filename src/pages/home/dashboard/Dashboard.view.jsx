import React from "react"
import { Link } from "react-router-dom"
import NavigationMobile from "../../../components/NavigationMobile"
import TodosListContainer from "../todoslist/TodosList.container"
import "./Dashboard.style.css"

const DashboardView = ({ countTodos, countCompleteTodo, countAllTodo }) => {
    return (
        <div className="md:flex justify-center">
            <div className="hidden lg:block lg:w-1/4 mr-4">
                <div className="bg-white rounded-md shadow-md px-4 py-5 mt-4 lg:px-6">
                    <h1 className="mb-4 font-bold text-md text-gray-700">Menu</h1>
                    <ul className="space-y-2">
                        <li>
                            <Link to={'/'} className="flex items-center p-2 text-base font-normal rounded-lg bg-gray-100 hover:bg-gray-300 hover:bg-opacity-50">
                            <i className="fa-solid fa-house"></i>
                            <span className="ml-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/addtodo'} className="flex items-center p-2 text-base font-normal rounded-lg bg-gray-100 hover:bg-gray-300 hover:bg-opacity-50">
                            <i className="fa-solid fa-plus"></i>
                            <span className="ml-3">Add To Do</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/alltodos'} className="flex items-center p-2 text-base font-normal rounded-lg bg-gray-100 hover:bg-gray-300 hover:bg-opacity-50">
                            <i className="fa-solid fa-list-check"></i>
                            <span className="ml-3">All To Do</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full lg:w-3/5">
                <div className="bg-white rounded-md shadow-md px-4 py-4 mt-4 lg:px-6">
                    <h1 className="mb-4 font-bold text-md text-gray-700">Dashboard</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                        <button><Link to={'/alltodos'}>
                            <div className="box-shadow: h-[65px] sm:h-20 bg-blue-400 bg-opacity-50 rounded-lg w-auto border-solid border border-gray-600">
                                <div className="text-center pt-2 sm:pt-3">
                                    <h1 className="text-sm sm:text-[16px] text-gray-700">All To do</h1>
                                    <p className="font-bold text-gray-700 text-xl lg:text-2xl">{countAllTodo} <i className="fas fa-tasks"></i></p>
                                </div>                        
                            </div>
                        </Link></button>
                        <div className="box-shadow: h-[65px] sm:h-20 bg-gray-100 rounded-lg w-auto border-solid border border-gray-600">
                            <div className="text-center pt-2 sm:pt-3">
                                <h1 className="text-sm sm:text-[16px] text-gray-700">Unfinished To do</h1>
                                <p className="font-bold text-gray-700 text-xl lg:text-2xl">{countTodos} <i className="fa-solid fa-spinner"></i></p>
                            </div>                        
                        </div>
                        <div className="box-shadow: h-[65px] sm:h-20 bg-green-400 bg-opacity-50 rounded-lg w-auto border-solid border border-gray-600">
                            <div className="text-center pt-2 sm:pt-3">
                                <h1 className="text-sm sm:text-[16px] text-gray-700">Completed To do</h1>
                                <p className="font-bold text-gray-700 text-xl lg:text-2xl">{countCompleteTodo} <i className="fa-solid fa-check"></i></p>
                            </div>                        
                        </div>
                    </div>
                </div>
                <NavigationMobile />
                <TodosListContainer />
            </div>
        </div>
    )
}

export default DashboardView