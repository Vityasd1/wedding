import React from 'react'

export const TimelineItem = ({url,time,title,description}) => {
  return (
    <div className="tl-item">

      <div className="tl-bg" style={{backgroundImage: url}}></div>

      <div className="tl-year">
        <p className="f2 heading--sanSerif">{ time }</p>
      </div>

      <div className="tl-content">
        <h1>{ title }</h1>
        <p>{ description }</p>
      </div>

    </div>
  )
}

