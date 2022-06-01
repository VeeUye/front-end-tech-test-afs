import React from 'react'
import { shallow } from 'enzyme'

import Message from '.'

it('renders the correct text', () => {
  const wrapper = shallow(<Message text="Hello, world!" />)
  expect(wrapper.contains('Hello, world!')).toBe(true)
})
