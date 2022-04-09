import {React, useEffect, useState } from 'react';
import "./Event.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { getAllConfirmedEvents, getAllEvents } from '../../modules/EventManager';
import { getAllSnacks } from "../../modules/SnackManager"

export const EventConfirmed = ({rsvp }) => {
  const [events, setEvents] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [confirmedEvents, setConfirmedEvents] = useState([]);

  // const metals = getMetals()

// Remember that the function you pass to find() must return true/false
// const foundEvent = events.find(
//     (event) => {
//         return event.id === rsvp.eventId
//     }
// )

// console.log(events)

// const eventTitle = foundEvent.name;
// const eventDescription = foundEvent.description;

// const foundSnack = snacks.find(
//   (snack) => {
//       return snack.id === rsvp.snackId
//   }
// )
  

// const mySnack = foundSnack.name
// const totalCost = foundMetal.price

  const allConfirmedEvents = () => {
    return getAllConfirmedEvents().then(eventsFromAPI => {
      setConfirmedEvents(eventsFromAPI)
    })
  };


  // const {eventId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    allConfirmedEvents();
    }, []);

    useEffect(() => {
      getAllEvents().then(theEvents => {
        setEvents(theEvents)
      })
    }, []);
    
    useEffect(() => {
      getAllSnacks().then(snacksFromAPI => {
        setSnacks(snacksFromAPI)
      })
    }, []);

  return (
    <section className="eventForm">
      <h3 className="event__name">Event Name: {rsvp.name} </h3>
      <div className="event__snack">Snack: {rsvp.snacks.name} </div>
      <div className="event__guardian">Guardian: {rsvp.guardianName}</div>
      <div className="event__child">Child: {rsvp.childName}</div>

      <button>Delete</button>


    </section>
  );
}

