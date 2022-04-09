import {React, useEffect } from 'react';
import "./Event.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { getEventById } from '../../modules/EventManager';



export const EventCard = ({ event, handleAttendEvent }) => {

  // got the events from the API on the component's first render
  useEffect(() => {
    getEventById();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-content">

        <h2>Event: <span className="card-eventname"> {event.name}</span></h2>
        <h3>Description: <span className="card-eventdescription"> {event.description}</span></h3>
        <h3>Location: <span className="card-eventlocation"> {event.location}</span></h3>


        {/* <Link to={`/events/${event.id}`}>
         <button>Details</button>
        </Link> */}

          {/* <button type="button"
            className="btn"
            onClick={() => { navigate("/events/create") }}>
            Attend Event
          </button> */}

        <Link to={`/events/${event.id}/form`}>
            <button>Attend Event</button>
          </Link>  

        {/* <button type="button" onClick={() => handleAttendEvent(event.id)}>Attend Event</button>
       */}
        {/* <Link to={`/events/${event.id}/edit`}>
        <button>Edit</button>
        </Link> */}

      </div>
    </div>
  );
}



