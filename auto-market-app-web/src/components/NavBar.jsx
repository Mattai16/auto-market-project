import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="bg-cyan-950 shadow-lg fixed w-full z-10 top-0" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-white text-xl font-semibold">AUTO MARKET</span>
                    </div>

                    <div className="flex justify-center">
                        <ul className="flex space-x-2">
                            <li>
                                <Link to="/" className="text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium">INICIO</Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium">LOGIN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default NavBar;
