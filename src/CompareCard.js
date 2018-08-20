import React from 'react'
import './CompareCard.css'
import PropTypes from 'prop-types'

export const CompareCard = ({locationA, locationB, locationAvgA, locationAvgB, comparison}) => {
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

CompareCard.propTypes = {
  locationA: PropTypes.string,
  locationB: PropTypes.string,
  locationAvgA: PropTypes.number,
  locationAvgB: PropTypes.number,
  comparison: PropTypes.number,
}