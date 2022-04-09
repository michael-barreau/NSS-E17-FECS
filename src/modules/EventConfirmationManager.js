const remoteURL = "http://localhost:8088"
  
  export const getAllEvents = () => {
    return fetch(`${remoteURL}/events`)
    .then(res => res.json())
  }

  export const getAllSnacks = () => {
    return fetch(`${remoteURL}/snacks`)
    .then(res => res.json())
  }

  export const getAllGuardians = () => {
    return fetch(`${remoteURL}/guardians`)
    .then(res => res.json())
  }
  
  export const getAllChildren= () => {
    return fetch(`${remoteURL}/children`)
    .then(res => res.json())
  }

  export const eventConfirmation= (registeredEvent) => {
   return fetch(`${remoteURL}/eventConfirmation`, {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(registeredEvent)
       }).then(res => res.json()
       )}

export const getAllEventForms= () => {
        return fetch(`${remoteURL}/eventConfirmation`)
        .then(res => res.json())
      }
    