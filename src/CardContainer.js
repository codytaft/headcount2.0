import React from 'react'
import { DistrictCard } from './DistrictCard'
import './CardContainer.css'

export const CardContainer = ({ districts, selectCard }) => {
  const districtValues = Object.values(districts)
  const displayCards = districtValues.map((district, index) => (
    <DistrictCard
      location={district.location}
      stats={district.stats}
      id={index}
      selectCard={ selectCard }
      isSelected={district.isSelected}
    />
  ))
  
  return (
    <div className="cardContainer">
      { displayCards }
    </div>
  )
}