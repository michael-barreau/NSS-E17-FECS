import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { getAllEvents, getEventById } from '../../modules/EventManager.js';
// import { useNavigate } from "react-router-dom"

export const EventList = () => {
  
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return getAllEvents().then(eventsFromAPI => {
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
        {events.map(event =>
          <EventCard
            key={event.id}
            event={event}
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


