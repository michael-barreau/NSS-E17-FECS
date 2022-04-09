import React, { useState, useEffect } from 'react';
import {EventConfirmed} from "./EventConfirmedCard"
import { getAllConfirmedEvents, getEventById } from '../../modules/EventManager.js';
// import { useNavigate } from "react-router-dom"

export const EventListConfirmed = () => {
  
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return getAllConfirmedEvents().then(eventsFromAPI => {
      setEvents(eventsFromAPI)
    });
  };

  // const handleAttendEvent = id => {
  //   attendEvent(id)
  //   .then(() => getAllEvents().then(setEvents));
  // };

  useEffect(() => {
    getEvents();
  }, []);

  // const navigate = useNavigate();

  return (
    <>
      <section className="section-content">
        Upcoming Events
      </section>

      <div className="container-cards">
        {events.map(rsvp =>
          <EventConfirmed
            key={rsvp.id}
            rsvp={rsvp}
          />)}
      </div>
      {/* 
    <div className="container-cards">
      <button type="button"
          className="btn"
          onClick={() => {navigate("/events/create")}}>
          Attend Event
      </button>
    </div>  */}
    </>
  )
};


