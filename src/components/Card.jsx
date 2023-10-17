import React from 'react'

const Card = ({name, price}) => {
  return (
    <div className='card'>
      <div>{name}</div>
      <span>{price}$</span>
    </div>
  )
}

export default Card