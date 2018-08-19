import React from 'react'
import './CompareCard.css'

export const CompareCard = ({location, stats, id}) => {
  return (
    <div className="districtCard" key={id} onClick={(e)=>{selectCard(location)}}>
      <h1 className="districtLocationA">{location}</h1>
      <ul className="districtStats">{displayStats}</ul>
      <h1 className="districtLocationB"></h1>
    </div>
  )
}