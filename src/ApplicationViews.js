import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { EventList } from './components/event/EventList.js'
import { EventDetail } from './components/event/EventDetail.js'
import { EventForm } from "./components/event/EventForm "
import { EventEditForm } from './components/event/EventEditForm'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'

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

                {/* Render the location list when http://localhost:3000/ */}

                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />
                

                 {/* Render the event list when http://localhost:3000/events */}
                <Route exact path="/events" element={<PrivateRoute><EventList /></PrivateRoute>} />
                <Route exact path="/events/:eventId" element={<PrivateRoute><EventDetail /></PrivateRoute>} /> 
                <Route path="/events/create" element={<PrivateRoute><EventForm /></PrivateRoute>} />  
                <Route path="/events/:eventId/edit" element={<PrivateRoute><EventEditForm /></PrivateRoute>} />
            </Routes>
        </>
    )
}