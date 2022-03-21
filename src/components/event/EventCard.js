import React from "react"
import "./Event.css"
import { Link } from "react-router-dom";

export const EventCard = ({ event, handleDeleteEvent }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={'/images/asap.png'} alt="Teacher With Kids" />
        </picture>
        <h3>Name: <span className="card-eventname">
          {event.name}
        </span></h3>
        <p>Type: {event.type}</p>
        <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
        <Link to={`/events/${event.id}`}>
         <button>Details</button>
        </Link>
        <Link to={`/events/${event.id}/edit`}>
        <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}

