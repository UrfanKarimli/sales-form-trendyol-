import React from 'react'

const Input = ({type, className, id,placeholder}) => {

  return (
    <input type={type} className={`common ${className}`} id={id} placeholder={placeholder}/>
  )
}


export default Input