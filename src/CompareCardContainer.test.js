import React from 'react';
import { shallow } from 'enzyme';
import { CompareCardContainer } from './CompareCardContainer.js'

describe('CompareCardContainer', () => {

  it('should match the snapshot with no cards', () => {
    const mockProp = {
                      comparedObject: {}
    }
    const wrapper = shallow(<CompareCardContainer comparedObject={mockProp}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with cards', () => {
    const mockProp = {
                      comparedObject: {
                        'ACADEMY 20': 0.407,
                        'ADAMS COUNTY 14': 0.709,
                        'compared': 1.742
                      }
    }
    const wrapper = shallow(<CompareCardContainer comparedObject={mockProp}/>)
    expect(wrapper).toMatchSnapshot()
  })

})