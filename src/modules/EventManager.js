const remoteURL = "http://localhost:8088"

export const getEventById = (eventId) => {
  //be sure your events have good data and related to a location and user
  return fetch(`${remoteURL}/events/${eventId}?_expand=location&_expand=user`)
  .then(res => res.json())
}

export const getAllEvents = () => {
  return fetch(`${remoteURL}/events`)
  .then(res => res.json())
}

export const deleteEvent = (id) => {
  return fetch(`${remoteURL}/events/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addEvent = (newEvent) => {
  return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
  }).then(response => response.json())
}
export const updateEvent = (editedEvent) => {
  return fetch(`${remoteURL}/events/${editedEvent.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedEvent)
  }).then(data => data.json());
}
// Add this method to the AnimalManager
export const getRandomId = () => {
  return fetch(`${remoteURL}/events`)
    .then(result => result.json())
    .then(events => {
      const randomIndex = Math.floor(Math.random() * events.length);
      const randomEvent = events[randomIndex];
      return randomEvent.id;
  });
}