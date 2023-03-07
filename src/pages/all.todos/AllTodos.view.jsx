import { Link } from "react-router-dom"
import NavigationMobile from "../../components/NavigationMobile"

const AllTodosView = ({ dataTodo, filterStatusTodo, filterStatusComplete, ChangeStatus }) => {
    const DataTodo = () => {
        return (
            <>
            <div className="sm:grid grid-cols-2 gap-x-2">
            {dataTodo.map((data) => (
        <div
            className={`block max-w-sm p-5 border border-gray-700 drop-shadow-sm rounded-lg shadow mt-2 ${
                data.status === "todo" ? "bg-gray-100 border bg-opacity-50 hover:bg-gray-200" : "bg-green-400 bg-opacity-50 hover:bg-green-500 hover:bg-opacity-50"
            }`}
            key={data.id}
        >
            <div className="flex items-center justify-between">
                <h1 className="text-normal text-lg font-bold tracking-tight text-gray-800 ">{data.todo_title}</h1>   
                <div className="flex-shrink-0">                                                                                   
                    <button onClick={() => ChangeStatus(data.id) }><i className={`${data.status === "todo" ? "fa-solid fa-check mr-4 sm:mr-3 text-xl" : ""}`}></i></button>
                    <Link to={`/detailTodo/${data.id}`}><button><i className="fas fa-edit text-xl"></i></button></Link>      
                </div>
            </div>
            <div className="">
                <p className="flex text-sm">Due {data.todo_due}</p>
            </div>
        </div>
    ))}
            </div>
            </>
        )
    }

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
            <div className="w-full lg:w-3/5">
                <div className="bg-white rounded-md shadow-md px-4 py-5 mt-4 lg:px-6">
                <h1 className="mb-4 font-bold text-md text-gray-700">Showing All To Do</h1>
                <div className="overflow-auto h-[30rem]">
                    <div className="flex-shrink-0">    
                        </div>
                            <DataTodo />
                        </div>
                    </div>
                </div>      
                <NavigationMobile />
            </div>
        </div>        
    )
}

export default AllTodosView