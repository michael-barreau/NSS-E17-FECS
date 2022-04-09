import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getAllEvents} from '../../modules/EventManager';
import {getAllSnacks} from '../../modules/SnackManager';
import {eventConfirmation} from '../../modules/EventManager';
import './EventForm.css'

export const EventForm = () => {

	const [events, setEvents] = useState([]);
	const [snacks, setSnacks] = useState([]);
	const [confirmed, setConfirmed] = useState({
		eventId: 0,
		snacksId: 0,
		guardianName:"",
		childName:""
	});


	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	
	const handleControlledInputChange = (event) => {
		const chosenEvent = { ...confirmed }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)}
		chosenEvent[event.target.id] = selectedVal
		setConfirmed(chosenEvent)
	}


	// name: "",
		// description: "",
		// location: ""

		useEffect(() => {
		getAllEvents()
            .then((event) => {
                setEvents(event);
			});
		}, []);
		console.log(events)

		useEffect(() => {
		getAllSnacks()
            .then((newSnack) => {
                setSnacks(newSnack);
			});
		}, []);
		console.log(snacks)

	const handleClickSaveEvent = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		eventConfirmation(confirmed).then(() => navigate(`/eventConfirmed/list`))
	}

	return (
		<form className="eventForm">

			<h2 className="eventForm__title">Register For Event</h2>
			
			<fieldset>
				<div className="form-group">
					<label htmlFor="event">Event</label>
					<select value={confirmed.eventId} name="event" id="eventId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select Event</option>
						{events.map(event => (
							<option key={event.id} value={event.id}>
								{event.name}
							</option>))}
					</select>
				</div>
			</fieldset>

			<fieldset>
				<div className="form-group">
					<label htmlFor="snack">Snack</label>
					<select value={confirmed.snacksId} name="snack" id="snacksId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a snack</option>
						{snacks.map(s => (
							<option key={s.id} value={s.id}>
								{s.name}
							</option>))}
					</select>
				</div>
			</fieldset>

			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Guardian (Drop-Off/Pick-Up)</label>
					<input type="text" id="guardianName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Guardian Name" value={confirmed.guardianName} />
				</div>
			</fieldset>

			<fieldset>
				<div className="form-group">
					<label htmlFor="child">Child</label>
					<input type="text" id="childName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Child Name" value={confirmed.childrenName} />
				</div>
			</fieldset>

		<button className="btn btn-primary"
			onClick={handleClickSaveEvent}>
			Confirm Registration
		</button>
		</form>
		)
};