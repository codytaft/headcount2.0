import React from 'react'
import './Search.css'
import PropTypes from 'prop-types'

const Search = ({updateCards}) => {
  return(
    <input
      type="text"
      placeholder="search"
      className="searchBar"
      onChange={(e) => updateCards(e.target.value)}
    />
  )
}

export default Search

Search.propTypes = {
  updateCards: PropTypes.func,
}