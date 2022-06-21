import React from 'react'
import axios from "axios";

const ResetButton = () => {
  const onClickReset = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jenifer-kindermann/clear")
    .then(response => {
      console.log(response)
    })
  }

  return (
    <div>
      <button onClick={onClickReset}>Resetar curtidas</button>
    </div>
  )
}

export default ResetButton