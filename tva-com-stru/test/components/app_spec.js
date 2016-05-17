import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import App from '../../src/components/app'

describe('App component', function() {

  before('render and locate element', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
      <App />
    )

    this.inputElement = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input')
  })

  it('<input> should be of type "text"', () => {
    expect(this.inputElement.getAttribute('type') === 'text')
  })

})
