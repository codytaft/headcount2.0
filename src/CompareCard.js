import React from 'react'
import './CompareCard.css'

export const CompareCard = ({locationA, locationB, locationAvgA, locationAvgB, comparison, isSelected}) => {
  return (
    <div className={comparison ? "compareCardShow" : "compareCardHide"}>
      <h1 className="districtLocation">{locationA}</h1>
      <h3 className="districtAvg">{locationAvgA}</h3>
      <p className="compareData">{comparison}</p>
      <h1 className="districtLocation">{locationB}</h1>
      <h3 className="districtAvg">{locationAvgB}</h3>
    </div>
  )
}