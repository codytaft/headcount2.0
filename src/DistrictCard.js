import React from 'react'
import './DistrictCard.css'

export const DistrictCard = ({location, stats, id, selectCard, isSelected}) => {
  const displayStats = Object.entries(stats).map((stat) => {
    return  <li className={stat[1] > .5 ? "statGreater" : "statLesser"}>{stat[0]}: {stat[1]}</li>})

  return (
    <div className={isSelected ? "districtCardSelected" : "districtCard"} key={id} onClick={()=>{selectCard(location)}}>
      <h1 className="districtLocation">{location}</h1>
      <ul className="districtStats">{displayStats}</ul>
    </div>
  )
}