import React, {useEffect, useState} from "react"
import { MessageCard } from './MessageCard.js'
import { getMyMessages, deleteMessage } from "../../modules/MessageManager.js"
import { useParams, useNavigate } from "react-router-dom"

export const MessageList = () => {
    const [messages, setMessages] = useState([])
    const myId = JSON.parse(sessionStorage.getItem("digital_user")).id
    
    const getMessages = () => {
        return getMyMessages(myId).then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        })
    }
    
    const {userId} = useParams()

    const handleDeleteMessage = id => {
        deleteMessage(id)
        .then(() => getMyMessages(myId).then(setMessages));
    };

    useEffect(() => {
        getMessages();
    }, []);

    return(
        <>
            <div className="container-cards">
                {messages.map(message => 
                    <MessageCard 
                    key={message.id} 
                    message={message} 
                    handleDeleteMessage={handleDeleteMessage} />)}
            </div>
        </>
    )

}