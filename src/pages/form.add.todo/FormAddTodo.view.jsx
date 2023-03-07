import React from 'react';
import { Link } from 'react-router-dom';
import NavigationMobile from '../../components/NavigationMobile';
import "./FormAddTodo.style.css"

const FormAddTodoView = ({ submit, todoTitle, todoDue }) => {
    return (
        <div className="bg-body">
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
            <div className="w-full lg:w-3/5 py-[7rem] lg:py-0">
                <div className="bg-white rounded-md shadow-md px-4 py-5 mt-4 lg:px-6 h-80">
                    <div className="flex">
                    <h1 className="font-bold text-gray-900">Add To Do</h1>                        
                    </div>
                    <form onSubmit={submit}className="mt-4">
                        <div>
                            <label className="mt-4 text-gray-900">Todo Title</label>
                            <div className="flex item-center mt-1 w-50">
                                <input onChange={todoTitle} placeholder="Enter to do title" className="form-input" type="text" required />
                            </div>
                        </div>                        
                        <div className='mt-4'>
                            <label className=" text-gray-900">Due Date</label>
                            <div className="flex item-center mt-1 w-50">
                                <input onChange={todoDue} placeholder="Enter to do title" className="form-input" type="date" required />
                            </div>
                        </div>    
                        <div className="mt-6 gap-4 ">
                            <button className="btn-blue float-right w-20">Add</button>
                        </div>
                    </form>
                    <NavigationMobile />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default FormAddTodoView