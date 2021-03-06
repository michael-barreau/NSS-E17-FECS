const remoteURL = "http://localhost:8088"

export const getEventById = (eventId) => {
  //be sure your events have good data and related to a location and user
  return fetch(`${remoteURL}/events/${eventId}`)
  .then(res => res.json())
}

export const getAllEvents = () => {
  return fetch(`${remoteURL}/events`)
  .then(res => res.json())
}

export const eventConfirmation = (confirmation) => {
  return fetch(`${remoteURL}/eventConfirmation`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(confirmation)
  }).then(res => res.json())
}

export const getAllConfirmedEventById = (id) => {
  //be sure your events have good data and related to a location and user
  return fetch(`${remoteURL}/eventConfirmation/${id}`)
  .then(res => res.json())
}

export const getAllConfirmedEvents = () => {
  return fetch(`${remoteURL}/eventConfirmation?_expand=snacks`)
  .then(res => res.json())
}

// fetch('http://localhost:8088/registeredEvents',{
//             method: 'POST',
//             headers: {"Content-Type":"application/json"},
//             body: JSON.stringify(form)
//        }).then(() => {
//            console.log("Event Registration Complete");
//            setIsPending(false);
//        })
//     }

// export const getAllUsers = () => {
//   return fetch(`${remoteURL}/users`)
//   .then(res => res.json())
// }

// export const getAllLocations = () => {
//   return fetch(`${remoteURL}/locations`)
//   .then(res => res.json())
// }


// export const getMyMessages = (userId) => {
//   return fetch(`${remoteURL}/messages?_expand=userId${userId}`)
//   .then(res => res.json())
// } 
// export const deleteEvent = (id) => {
//   return fetch(`${remoteURL}/events/${id}`, {
//     method: "DELETE"
//   }).then(result => result.json())
// }

// export const attendEvent = () => {
//   return fetch(`${remoteURL}/events`, {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify()
//   }).then(response => response.json())
// }

// export const updateEvent = (editedEvent) => {
//   return fetch(`${remoteURL}/events/${editedEvent.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(editedEvent)
//   }).then(data => data.json());
// }
// // Add this method to the EventManager
// export const getRandomId = () => {
//   return fetch(`${remoteURL}/events`)
//     .then(result => result.json())
//     .then(events => {
//       const randomIndex = Math.floor(Math.random() * events.length);
//       const randomEvent = events[randomIndex];
//       return randomEvent.id;
//   });
// }