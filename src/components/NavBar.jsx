import { NavLink } from "react-router"

export const NavBar = () => {
  return (
    <nav className="relative">
      <div className="top-0 left-0 w-full fixed bg-gray-600 text-gray-100 z-10 p-4">
        <div className="text-lg text-center">
          <NavLink className={({ isActive }) => `mx-2 px-4 py-2 
        ${isActive ? "underline" : ""}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `mx-2 px-4 py-2 
        ${isActive ? "underline" : ""}`} to="/cart">Cart</NavLink>
        </div>
      </div>
    </nav>
  )
}
