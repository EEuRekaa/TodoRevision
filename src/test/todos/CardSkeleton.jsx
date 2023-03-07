import Skeleton from "react-loading-skeleton"

const CardSkeleton = (count) => {
    return(
        Array(count).fill(0).map((_, keyy) => 
            <div className="bg-gray-200 border-gray-900 rounded-md shadow-md px-4 py-4 mt-6 md:mt-0" key={keyy}>       
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900"><Skeleton style={{width: 50}}></Skeleton></h5>              
                <p className="mb-3 font-normal text-gray-700"><Skeleton></Skeleton></p>      
            </div>
        )
        
    )
}

export default CardSkeleton