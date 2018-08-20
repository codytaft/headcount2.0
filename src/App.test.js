import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';


describe('App', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  });


  it ('cards to be rendered on page load', () => {
    const wrapper = mount(<App />)
    expect(wrapper.state().districtCards.length).toEqual(181)
  })
})