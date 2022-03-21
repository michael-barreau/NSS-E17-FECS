import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../../modules/EventManager';
import './EventForm.css'
//import locations and users



export const EventForm = () => {
	// State will contain both event data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [event, setEvent] = useState({
		name: "",
		type: "",
		locationId: 0,
		userId: 0
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [locations, setLocations] = useState([]);
	const [users, setUsers] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newEvent = { ...event }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newEvent[event.target.id] = selectedVal
		// update state
		setEvent(newEvent)
	}

    useEffect(() => {
		//load location data and setState
	}, []);

	const handleClickSaveEvent = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const locationId = event.locationId
		const userId = event.userId

		if (locationId === 0 || userId === 0) {
			window.alert("Please select a location and a customer")
		} else {
			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
			addEvent(event)
				.then(() => navigate("/events"))
		}
	}

	return (
		<form className="eventForm">
			<h2 className="eventForm__title">Select Event</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Event name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" value={event.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="breed">Event type:</label>
					<input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event type" value={event.type} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={event.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="userId">User: </label>
					<select value={event.userId} name="user" id="userId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a User</option>
						{users.map(u => (
							<option key={u.id} value={u.id}>
								{u.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEvent}>
				Save Event
          </button>
		</form>
	)
};
