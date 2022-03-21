import React, { useState, useEffect } from 'react';
//import the components we will need
import { EventCard } from './EventCard';
import { deleteEvent, getAllEvents, getEventById } from '../../modules/EventManager.js';
import { useNavigate } from "react-router-dom"

export const EventList = () => {
  // The initial state is an empty array
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    // After the data comes back from the API, we
    //  use the setEvents function to update state
    return getAllEvents().then(eventsFromAPI => {
      setEvents(eventsFromAPI)
    });
  };

  const handleDeleteEvent = id => {
    deleteEvent(id)
    .then(() => getAllEvents().then(setEvents));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getEvents();
  }, []);

  const navigate = useNavigate();

  // Finally we use .map() to "loop over" the events array to show a list of event cards
  return (
    //add this button above your display of animal cards
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { navigate("/events/create"); } }>
          Attend Event
        </button>
      </section><div className="container-cards">
        {events.map(event => <EventCard
          key={event.id}
          event={event}
          handleDeleteEvent={handleDeleteEvent} />)}
      </div>
    </>
  );
};
  