import React, { Component } from 'react';
import './App.css';
import { CardContainer } from './CardContainer'
import DistrictRepository from './helper'
import Search from './Search.js'

const district = new DistrictRepository()

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtCards: [],
      selectedCards: [],
      comparedObject: {}
    }
  }
  componentDidMount = () => {
    this.updateCards()
  }

  updateCards = (data) => {
    const districtCards = district.findAllMatches(data)
    this.setState({ districtCards })
  }

  selectCard = (data) => {
    const foundCard = district.findByName(data)
    const selectState = this.state.selectedCards
    if (!selectState.includes(foundCard) && selectState.length < 2) {
      const selectedCards = [...this.state.selectedCards, foundCard]
      this.setState({ selectedCards }, () => this.compareCards( this.state.selectedCards ))
      foundCard.isSelected = !foundCard.isSelected
    }
    if (selectState.includes(foundCard)) {
      this.deselectCards(foundCard)
    } 
  }

  deselectCards = (foundCard) => {
    const selectedCards = this.state.selectedCards.filter(card => {
      return card.location !== foundCard.location
    })
    this.setState({ selectedCards })
    foundCard.isSelected = !foundCard.isSelected
  }

  compareCards = (cards) => {
    if (this.state.selectedCards.length > 1) {
      var comparedObject = district.compareDistrictAverages(cards[0].location, cards[1].location)
    }
    this.setState( { comparedObject })
  }

  render() {
    return (
      <div className='app'> 
        <div className='title'>Welcome To Headcount 2.0</div>
        <Search updateCards={this.updateCards}/>
        <CardContainer 
                      districts={this.state.selectedCards}
                      comparedDistrict={this.state.comparedObject}
        />
        <CardContainer 
                      districts={ this.state.districtCards }
                      selectCard={ this.selectCard }
                      compareCards={ this.compareCards }
        />
      </div> 
    );
  }
}

export default App;
