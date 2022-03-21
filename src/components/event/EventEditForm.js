import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getEventById, updateEvent} from "../../modules/EventManager"
import "./EventForm.css"

export const EventEditForm = () => {
  const [event, setEvent] = useState({ name: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {eventId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const updateExistingEvent = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEvent = {
      id: eventId,
      name: event.name,
      type: event.type
    };

  updateEvent(editedEvent)
    .then(() => navigate("/events")
    )
  }

  useEffect(() => {
    getEventById(eventId)
      .then(event => {
        setEvent(event);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={event.name}
            />
            <label htmlFor="name">Event name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="type"
              value={event.type}
            />
            <label htmlFor="type">Type</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEvent}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}