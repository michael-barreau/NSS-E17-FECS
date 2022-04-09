import { Link } from "react-router-dom"
import { MessageList } from "./MessageList"
import React, { useState } from "react"
import { MessageForm } from "./MessageForm"
// import "./MessagePage.css"

export const MessagePage = () => {
    const [toggled, isToggled] = useState(true)

    return(
        <>
                    <button className="btn btn-primary"
                            onClick={() => isToggled(!toggled)}>
                            New Message
                    </button>
                    {toggled ? <MessageForm /> : null}
                    <MessageList />
        </>

    ) 
}