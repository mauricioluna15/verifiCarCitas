/* eslint-disable react/prop-types */
// import { useState } from "react"

const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
    <p>{mensaje}</p>
  </div>
  )
}

export default Error