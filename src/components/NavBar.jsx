import { NavLink } from "react-router"
import { ShoppingCart, HomeIcon, CircleUserRound } from "lucide-react"
import SearchBar from "./SearchBar"
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"




export const NavBar = () => {
  const { logged, setLogged, setError, setRepeatPassword, setPassword, setUserName} = useContext(UserContext)

  const signOut = () => {
    setLogged(false)
    setError("")
    setRepeatPassword("")
    setPassword("")
    setUserName("")
  }

  return (
    <nav className="relative">
      <div className="top-0 left-0 w-full fixed bg-gray-700 text-gray-100 z-10 p-4">
        <div className="text-lg text-center flex  justify-evenly md:px-64">
          <div className="flex">
            <NavLink className={({ isActive }) => `mx-2 px-4 py-2 hover:text-red-500
        ${isActive ? "text-red-600" : ""}`} to="/">
              <HomeIcon />
            </NavLink>
            <SearchBar />
          </div>
          <div className="flex justify-center items-center">
            <NavLink className={({ isActive }) => `mx-2 px-2 py-2 hover:text-red-500
        ${isActive ? "text-red-600" : ""}`} to="/cart">
              <ShoppingCart />
            </NavLink>
            <NavLink className={({ isActive }) => `mx-2 px-2 py-2 hover:text-red-500 
        ${isActive ? "text-red-600" : ""}`} to="/login">
              <CircleUserRound />
            </NavLink>
            {logged ? <button
            onClick={signOut}
              className="px-10 py-2 border border-gray-100 rounded-md text-gray-100 mx-2  hover:border-red-500 hover:text-red-500 cursor-pointer">
              Sign out
            </button>
              : <NavLink
                to={"/login"} 
                className="px-10 py-2 border border-gray-100 rounded-md text-gray-100 mx-2  hover:border-red-500 hover:text-red-500 cursor-pointer">
                Sign In
              </NavLink>}
          </div>
        </div>
      </div>
    </nav>
  )
}
