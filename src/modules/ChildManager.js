const remoteURL = "http://localhost:8088"

export const getChildById = (childId) => {
    //be sure your events have good data and related to a location and user
    return fetch(`${remoteURL}/children/${childId}`)
    .then(res => res.json())
  }
  
  export const getAllChildren = () => {
    return fetch(`${remoteURL}children`)
    .then(res => res.json())
  }
  