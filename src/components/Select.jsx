import React from 'react'

const Select = ({className,id}) => {
    const options = [
        { value: 'ayaqqabi', text: 'ayaqqabi' },
        { value: 'saat', text: 'saat' },
        { value: 'tekstil', text: 'tekstil' }
    ]

    
    return (
        <select className={`select ${className}`} id={id} >
            {
                options.map((item,index) => {
                    return (<option key={index} value={item.value}>{item.text}</option>)
                })
            }

        </select>
    )
}

export default Select