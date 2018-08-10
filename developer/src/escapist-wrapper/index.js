import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

import { startTracker, stopTracker } from './mouse-tracker'
import { doMove } from './wrapper-move'

const { abs, min } = Math
const maxDiff = 100

const Move = styled.div`
  height: 100px;
  width: 300px;
`

const Wrapper = styled.div`
  position: initial;
  height: 50px;
  width: 50px;
  background-color: blue;
  border: 2px solid palevioletred;
  ${ prop => `position: ${(prop.s.moved ? 'absolute' : 'initial')}` }
  ${ prop => `top: ${prop.s.y}px;` }
  ${ prop => `left: ${prop.s.x}px;` }
`

class EscapistWrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      moved: false,
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
    const setPostion = ({ x, y }) => this.setState({ moved: true, x, y })
    doMove(this.element, mousePosition, setPostion)
  }

  render () {
    return (
      <Wrapper s={this.state} >
        {JSON.stringify(this.state)}
      </Wrapper>
    )
  }
}

export default EscapistWrapper
