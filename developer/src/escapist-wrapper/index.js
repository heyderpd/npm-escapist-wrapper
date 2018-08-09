import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

import { startTracker, stopTracker } from './mouse-tracker'
import { getNewPosition } from './wrapper-position'

const { abs, min } = Math
const maxDiff = 100

const Wrapper = styled.div`
  position: initial;
  height: 50px;
  width: 50px;
  background-color: blue;
  border: 2px solid palevioletred;
`

class EscapistWrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
    this.reactToMousePosition = this.reactToMousePosition.bind(this)
    this.element = null
  }

  componentWillMount() {
    startTracker(this.reactToMousePosition)
  }

  componentDidMount() {
    this.element = findDOMNode(this)
  }

  componentWillUnmount() {
    stopTracker()
  }

  reactToMousePosition(mousePosition) {
    const { x, y } = getNewPosition(this.element, mousePosition)
    this.setState({ x, y })
  }

  render () {
    return (
      <Wrapper>
        {JSON.stringify(this.state)}
      </Wrapper>
    )
  }
}

export default EscapistWrapper
