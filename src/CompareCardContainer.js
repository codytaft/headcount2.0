import React from 'react'
import { DistrictCard } from './DistrictCard'
import { CompareCard } from './CompareCard'
// import './CompareCardContainer.css'

export const CompareCardContainer = ({ districts, selectCard, comparedObject }) => {
  console.log(comparedObject)
  const districtValues = Object.values(districts)
  const displayCards = districtValues.map(district => (
    <DistrictCard
      location={district.location}
      stats={district.stats}
      key={district.id}
      selectCard={ selectCard }
    />
  ))
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
      { displayCards }
      { compareCards }
    </div>
  )
}