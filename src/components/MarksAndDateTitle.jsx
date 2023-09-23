import React from 'react'

const MarksAndDateTitle = ({ subject, totalMark }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span className='text-sm text-center font-semibold'>માર્ક</span>
      <span className='text-sm text-center font-semibold'>તારીખ	</span>
    </div>
  )
}

export default MarksAndDateTitle