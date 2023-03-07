import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import NavigationMobile from "../../../components/NavigationMobile"
import TodosListContainer from "../todoslist/TodosList.container"

const DashboardSkeleton = () => {
    return (       
        <div className="md:flex justify-center">
        <div className="hidden lg:block lg:w-1/4 mr-4">
            <div className="bg-white rounded-md shadow-md px-4 py-5 mt-4 lg:px-6">
                <h1 className="mb-4 font-bold text-md text-gray-700">Menu</h1>
                <ul className="space-y-2">
                    <li>
                        <div className="flex items-center p-2 text-base font-normal rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white">
                            <i className="fa-solid fa-house"></i>
                            <span className="ml-3">Home</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 text-base font-normal rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white">
                            <i className="fa-solid fa-plus"></i>
                            <span className="ml-3">Add To Do</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 text-base font-normal rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white">
                            <i className="fa-solid fa-list-check"></i>
                            <span className="ml-3">All To Do</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-full lg:w-3/5">
            <div className="bg-white rounded-md shadow-md px-4 py-5 mt-4 lg:px-6">
                <h1 className="mb-4 font-bold text-md text-gray-700">Dashboard</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                    <div>
                        <div className="shadow-lg box-shadow: h-20 bg-gray-100 rounded-lg w-auto border-solid border border-gray-600">
                            <div className="text-center pt-3">
                                <h1 className="text-gray-700"><Skeleton style={{width: '6rem'}} /></h1>
                                <div className="font-bold text-gray-700 text-2xl"><Skeleton style={{width: '6rem'}} /><i className="fas fa-tasks"></i></div>
                            </div>                        
                        </div>
                    </div>

                    <div className="shadow-lg box-shadow: h-20 bg-gray-100 rounded-lg w-auto border-solid border border-gray-600">
                            <div className="text-center pt-3">
                                <h1 className="text-gray-700"><Skeleton style={{width: '6rem'}} /></h1>
                                <p className="font-bold text-gray-700 text-xl lg:text-2xl"><Skeleton style={{width: '6rem'}} /><i className="fa-solid fa-spinner"></i></p>
                            </div>                        
                        </div>
                    
                    <div className="shadow-lg box-shadow: h-20 bg-gray-100 rounded-lg w-auto border-solid border border-gray-600">
                        <div className="text-center pt-3">
                            <h1 className="text-gray-700"><Skeleton style={{width: '6rem'}} /></h1>
                            <div className="font-bold text-gray-700 text-2xl"><Skeleton style={{width: '4rem'}} /><i className="fa-solid fa-check"></i></div>
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

export default DashboardSkeleton