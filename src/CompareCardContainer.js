import React from 'react'
import { CompareCard } from './CompareCard'
import './CompareCardContainer.css'

export const CompareCardContainer = ({ comparedObject }) => {
  if (comparedObject) {
    const compareKeys = Object.keys(comparedObject)
    var compareCards =
      <CompareCard
        locationA={compareKeys[0]}
        locationAvgA={comparedObject[compareKeys[0]]}
        locationB={compareKeys[1]}
        locationAvgB={comparedObject[compareKeys[1]]}
        comparison={comparedObject.compared}
      />
  }
  
  return (
    <div className="compareCardContainer">
      { compareCards }
    </div>
  )
}