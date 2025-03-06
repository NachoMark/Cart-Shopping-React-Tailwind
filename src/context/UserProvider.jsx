import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [usersList, setUsersList] = useState(() => {
        const savedUsers = JSON.parse(
          localStorage.getItem("usersList") || "[]"
        );
        return savedUsers.length > 0 ? savedUsers : users;
      });
    
      useEffect(() => {
        localStorage.setItem("usersList", JSON.stringify(usersList));
      }, [usersList]);

      const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
      const [logged, setLogged] = useState(false)
      const [error, setError] = useState("")


  return (
    <UserContext.Provider value={{usersList, setUsersList, userName, setUserName, password, setPassword, logged, setLogged, repeatPassword, setRepeatPassword, error, setError}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserContext}