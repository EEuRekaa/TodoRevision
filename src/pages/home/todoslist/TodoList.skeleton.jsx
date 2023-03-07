import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const TodoListSkeleton = ({ data }) => {
    return (
        <>
         <div className="w-full lg:w-full">     
            <div className="bg-white rounded-md shadow-md px-4 py-5 mt-4 lg:px-6">
                <button className="btn-group-left-skeleton"><Skeleton style={{width: '6rem'}} /></button>
                <button className="btn-group-right-skeleton"><Skeleton style={{width: '6rem'}} /></button>  
                <h1 className="mb-4 mt-4 font-bold text-md text-gray-700"><Skeleton style={{width: '6rem'}} /></h1>
                    <div className="overflow-auto h-56 sm:h-64">
                        <div className="flex-shrink-0">  
                            <div className="sm:grid grid-cols-2 gap-x-4">
                                {Array(data).fill(0).map((_, keyy) =>
                                <div className="block max-w-sm p-6 bg-gray-100 bg-opacity-50 border border-gray-700 rounded-lg shadow hover:bg-gray-200 hover:bg-opacity-50 mt-4" key={keyy}>
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-normal text-lg font-bold tracking-tight text-gray-800"><Skeleton style={{width: '7rem'}} /></h1>   
                                        <div className="flex-shrink-0">                    
                                            <button className="mr-3"><i className="fa-solid fa-check text-xl opacity-95"></i></button>
                                            <div><button><i className="fas fa-edit text-xl opacity-95"></i></button></div>  
                                        </div>      
                                    </div>                    
                                    <div className="flex items-start">
                                        <p className="inline-flex text-sm"><Skeleton style={{width: '6rem'}} /></p>
                                    </div>                                          
                                </div>     
                                )}
                            </div>
                        </div>
                    </div>
                    </div>
                </div> 
            </>
    )    
}

export default TodoListSkeleton