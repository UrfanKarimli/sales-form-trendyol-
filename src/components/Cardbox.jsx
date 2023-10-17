import React from 'react'
import Card from './Card'

const Cardbox = ({ title, ads }) => {

    return (
        <div className='card-box'>
            <h2>{title}</h2>
            <div className="content">
                {
                    ads.map((item) => {
                        return (<Card name={item.name} price={item.price} />)
                    })
                }
            </div>
        </div>
    )
}

export default Cardbox