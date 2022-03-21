import React, { useState } from "react"

export const PropsAndState = ({ MDB }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {MDB} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Convert to attending button</button>
    </>
  )
}