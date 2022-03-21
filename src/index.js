import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Asap } from "./components/Asap.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Asap />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)