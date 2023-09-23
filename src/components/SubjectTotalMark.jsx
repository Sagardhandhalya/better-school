import React from 'react'

const SubjectTotalMark = ({ subject, totalMark }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span className='text-sm text-center font-semibold'>{subject}</span>
      <span className='text-sm text-center font-semibold'>{totalMark}</span>
    </div>
  )
}

export default SubjectTotalMark