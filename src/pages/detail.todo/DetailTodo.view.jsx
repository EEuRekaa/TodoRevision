import { Link } from "react-router-dom"
import NavigationMobile from "../../components/NavigationMobile"
import './DetailTodo.style.css'
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"

const DetailTodoView = ({ handleDelete, handleEdit, handleInputChange, valueTodoTitle, valueTodoDue, Dropdown }) => {

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
            <div className="w-full lg:w-3/5 py-[8rem] lg:py-0">
                <div className="bg-white rounded-md shadow-md px-4 py-5 mt-4 lg:px-6 h-80">
                    <div className="flex">
                    <h1 className="font-bold text-gray-900">Edit To Do</h1>
                        <div className="ml-auto">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Options
                                <i className="fa-solid fa-caret-down -mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">                            
                                <div className="py-1">
                                    <Menu.Item>
                                    {({ active }) => (
                                        <button onClick={handleDelete}
                                        type="submit"
                                        className={Dropdown(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        Delete
                                    </button>
                                    )}
                                    </Menu.Item>
                                </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        </div>
                    </div>
                    <form onSubmit={handleEdit} className="mt-4">
                        <label className=" text-gray-900">Todo Title</label>
                            <div className="flex item-center mt-1 w-50">
                                <input value={valueTodoTitle} onChange={handleInputChange} placeholder="Enter to do title" className="form-input" type="text" required />
                            </div>
                            <div className="mt-4">
                                <label className="text-gray-900">Due Date</label>
                                <div className="flex item-center mt-1 w-50">
                                    <input value={valueTodoDue} readOnly className="form-inputred" type="date" />
                                </div>
                                <label className="text-red-500">Finish your to-do as soon as possible.</label>
                            </div>
                            <div className="mt-6 gap-4 ">
                                <button className="btn-blue float-right w-20">Modify</button>
                            </div>
                    </form>
                    <NavigationMobile />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default DetailTodoView