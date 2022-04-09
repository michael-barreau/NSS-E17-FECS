// import React, { useState, useEffect } from "react";
// import {useParams, useNavigate} from "react-router-dom"
// import { getEventById } from "../../modules/EventManager";
// import "./EventDetail.css";

// export const EventDetail = () => {
//   const [event, setEvent] = useState({ name: "", description: "", location:"" });
//   const [isLoading, setIsLoading] = useState(true);

//   const {eventId} = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("useEffect", eventId)
//     getEventById(eventId)
//       .then(event => {
//         setEvent(event);
//         setIsLoading(false)     
//       });
//     }, [eventId]);

//   const handleAddEvent = () => {
//     //invoke the add function in Event Manager and re-direct to the animal list.
//     setIsLoading(true);
//     handleAddEvent(eventId).then(() =>
//       navigate("/event")
//     );
// }

// return (
//   <section className="event">
//     <h3 className="event__name">Event:{event.name}</h3>
//     <div className="event__description">Description: {event.description}</div>
//     {/* What's up with the question mark???? See below.*/}
//     <div className="event__location">Location: {event.location}</div>

//     <button type="button" onClick={() => handleAddEvent(event.id)}>Register For Event</button>
//   </section>
// );
// };


//   // eslint-disable-next-line no-lone-blocks
//       {/* <button type="button" disabled={isLoading} onClick={handleDelete}>
//           Discharge
//       </button> */}

  
