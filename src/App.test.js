import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';


describe('App', () => {

  it('matches the snapshot', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toMatchSnapshot()
  });

  it.skip('renders a cardContainer with the correct props', () => {
    const wrapper = mount(<App />)
    
  });

  it ('cards to be rendered on page load', () => {
    const wrapper = mount(<App />)
    console.log(wrapper.state())
    expect(wrapper.state().districtCards.length).toEqual(181)
  })
})