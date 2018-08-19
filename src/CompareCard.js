import React from 'react'
// import './CompareCard.css'

export const CompareCard = ({locationA, locationB, locationAvgA, locationAvgB, comparison}) => {
  return (
    <div className="districtCard">
      <h1 className="districtLocationA">{locationA}</h1>
      <h3 className="districtAvgA">{locationAvgA}</h3>
      <p className="compareData">{comparison}</p>
      <h1 className="districtLocationB">{locationB}</h1>
      <h3 className="districtAvgB">{locationAvgB}</h3>

    </div>
  )
}