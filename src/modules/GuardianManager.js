const remoteURL = "http://localhost:8088"

export const getGuardianById = (guardianId) => {
    return fetch(`${remoteURL}/guardians${guardianId}`)
    .then(res => res.json())
  }
  
  export const getAllGuardians = () => {
    return fetch(`${remoteURL}/guardians`)
    .then(res => res.json())
  }
  