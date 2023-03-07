import { Link } from "react-router-dom"

const NavigationMobile = () => {
    return (
		<div className="w-full lg:hidden">
			<section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
				<div id="tabs" className="flex justify-between">
				<Link to={'/'} className="w-full focus:text-blue-400 hover:text-blue-400 justify-center inline-block text-center pt-2 pb-1">
						<i className="fa-solid fa-house text-2xl"></i>
						<span className="block text-xs">Home</span>
					</Link>
					<Link to={'/addtodo'} className="w-full rounded-full bg-blue-400 hover:bg-blue-500 text-white focus:text-white hover:text-white justify-center inline-block text-center pt-2 pb-1">
						<i className="fa-solid fa-plus text-2xl"></i>
						<span className="block text-xs">Add Todo</span>
					</Link>
					<Link to={'/alltodos'} className="w-full focus:text-blue-400 hover:text-blue-400 justify-center inline-block text-center pt-2 pb-1">
						<i className="fas fa-tasks text-2xl"></i>
						<span className="block text-xs">All Todo</span>
					</Link>
				</div>
			</section>
		</div>
    )
}

export default NavigationMobile