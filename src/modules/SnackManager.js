const remoteURL = "http://localhost:8088"

export const getSnackById = (snackId) => {
    //be sure your events have good data and related to a location and user
    return fetch(`${remoteURL}/snacks/${snackId}`)
    .then(res => res.json())
  }
  
  export const getAllSnacks = () => {
    return fetch(`${remoteURL}/snacks`)
    .then(res => res.json())
  }
  