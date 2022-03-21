import React, {useState} from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import "./Asap.css"

export const Asap = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("asap_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("asap_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("asap_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("asap_user") !== null)
      }
    
      
    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        </>
    )
}
