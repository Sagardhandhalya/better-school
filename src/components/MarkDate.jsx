import React from 'react'

const MarkDate = ({ mark, date }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <span className='text-sm'>{mark}</span>
            <span className="text-xs">{date}</span>
        </div>
    )
}

export default MarkDate