import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { deleteEvent, getEventById } from "../../modules/EventManager";
import "./EventDetail.css";

export const EventDetail = () => {
  const [event, setEvent] = useState({ name: "", type: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {eventId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getEventById(id) from EventManager and hang on to the data; put it into state
    console.log("useEffect", eventId)
    getEventById(eventId)
      .then(event => {
        setEvent(event);
        setIsLoading(false);
      });
  }, [eventId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteEvent(eventId).then(() =>
      navigate("/events")
    );
  };

  return (
    <section className="event">
      <h3 className="event__name">{event.name}</h3>
      <div className="event__breed">{event.type}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="event__location">Location: {event.location?.name}</div>
      <div className="event__owner">User: {event.user?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    </section>
  );
};


