import React from 'react'

const Button = ({className, type, id, text}) => {
  return (
    <button className={`btn ${className}`} type={type} id={id}>{text}</button>
  )
}

export default Button
