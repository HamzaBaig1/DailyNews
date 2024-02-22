import React from 'react'
import loading from "../spinner.gif"

function Spinner() {
  return (
    <div>
        <div className="container text-center">
      <img src={loading} alt="" / >
      </div>
    </div>
  )
}

export default Spinner
