import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logoutRequest } from "../api/fetch";

function NavBarUser() {

    const { user } = useAuth()

    const onLogout = async() => {
      const result = await logoutRequest()
      console.log(result)
    }

    return (
        <nav className="bg-cyan-950 shadow-lg fixed w-full z-10 top-0" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-white text-xl font-semibold">AUTO MARKET</span>
                    </div>

                    <div className="flex justify-center">
                        <ul className="flex space-x-2 items-center">
                            {user.rol === 'administrador' &&(
                                <li>
                                    <Link to="/carro/register" className="text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium">REGISTRAR CARRO</Link>
                                </li>
                            )}
                            <li>
                                <Link to="/home" className="text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium">INICIO</Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium uppercase">{user.userName}</Link>
                            </li>
                            {user &&(
                                <button onClick={onLogout} className="text-white hover:bg-gray-500 px-3 py-1.5 rounded-md text-sm font-medium">
                                    LOGOUT
                                </button>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default NavBarUser;