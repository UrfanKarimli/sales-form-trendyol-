import React from 'react';
import Option from './Option';

const Select = ({ className, id, options }) => {
   
    return (
        <select className={`selected ${className}`} id={id} >
            {options.map((item) => {
                return (<Option  value={item.value} text={item.text} />)
            })
            }
        </select>
    )
}


export default Select