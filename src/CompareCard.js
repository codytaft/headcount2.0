import React from 'react'
import './CompareCard.css'

export const CompareCard = ({locationA, locationB, locationAvgA, locationAvgB, comparison, isSelected}) => {
  return (
    <div className={comparison ? "compareCardShow" : "compareCardHide"}>
      <h1 className="districtLocation">{locationA}:</h1>
      <p className="districtAvg">{locationAvgA}</p>
      <h2 className="compareData">
        <span>---{comparison}---</span>
      </h2>
      <h1 className="districtLocation">{locationB}:</h1>
      <p className="districtAvg">{locationAvgB}</p>
    </div>
  )
}