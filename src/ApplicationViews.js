import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { EventList } from './components/event/EventList.js'
import { EventForm } from "./components/event/EventForm "
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { EventListConfirmed } from './components/event/EventConfirmedList'


//import { RegisteredEvent } from './components/event/RegisteredEvent.js'



export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("asap_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("asap_user") !== null)
    }

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />


                
                <Route exact path="/events" element={<PrivateRoute><EventList /></PrivateRoute>} />
                <Route path="/events/:eventId/form" element={<PrivateRoute><EventForm /></PrivateRoute>} />
                <Route path="/eventConfirmed/list" element={<PrivateRoute><EventListConfirmed /> </PrivateRoute>} />
            </Routes>
        </>
    )
}