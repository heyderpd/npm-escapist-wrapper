import React, { Component } from 'react'
import styled from 'styled-components'

import { startTracker, stopTracker } from './mouse-tracker'


const Wrapper = styled.div`
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
    this.getPosition = this.getPosition.bind(this)
  }

  getPosition(x, y) {
    this.setState({ x, y })
  }

  componentWillMount() {
    startTracker(this.getPosition)
  }

  componentWillUnmount() {
    stopTracker()
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
