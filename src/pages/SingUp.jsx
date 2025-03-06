import { useContext, useState } from "react"
import { Link } from "react-router"
import { UserContext } from "../context/UserProvider"

export const SingUp = () => {

    const {  setUsersList, userName, setUserName, password, setPassword, repeatPassword, setRepeatPassword, error, setError } = useContext(UserContext)

    const addUser = (userName, password) => {
        setUsersList((newUser) => [
            {
                userName,
                password
            },
            ...newUser,
        ])
    }


    function handleSubmit(e) {
        e.preventDefault()
        if (!userName.trim() && !password.trim()) {
            setError("Fill the empty field")
        } else if(password !== repeatPassword){
            setError("The passwords does not match")
        } else {
            addUser(userName, password)
            setUserName("")
            setPassword("")
            setRepeatPassword("")
            setError("Account created successfully")
        }
    }
    return (
        <div className="flex flex-row min-h-screen justify-center items-center bg-gray-100">
            <form
                className="max-w-sm mx-auto shadow-md bg-gray-600 p-20 rounded-xl"
                onSubmit={handleSubmit}>
                    
                <div className="mb-5 grid ">
                    <label
                        className="block mb-2 text-lg font-medium text-gray-100">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="shadow-xs px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md mb-4"
                        value={userName}
                        onChange={e => setUserName(e.target.value)} />
                    <label
                        className="block mb-2 text-lg font-medium text-gray-100">
                        Password
                    </label>
                    <input
                        type="password"
                        className="shadow-xs mb-2 px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <label
                        className="block mb-2 text-lg font-medium text-gray-100">
                        Repeat Password
                    </label>
                    <input
                        type="password"
                        className="shadow-xs  px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md"
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)} />
                    <Link
                        className="text-center text-lg my-4 text-blue-500 hover:text-blue-400"
                        to={"/login"}>
                        I already have an account
                    </Link>
                    <Link 
                    to={"/login"}
                    className=" text-gray-100 hover:underline">
                          &lt; Back to Sign In
                        </Link>
                </div>
                <div className="grid text-center">
                <button type="submit"
                    className="px-10 py-2 my-2 text-gray-100 border border-gray-100 rounded-md hover:bg-gray-100 hover:text-gray-950 cursor-pointer">
                    Create
                </button>
                 <p 
                 className="text-gray-100 text-lg">
                 {error}
                    </p>
                </div>
            </form>
            
        </div>
    )
}

