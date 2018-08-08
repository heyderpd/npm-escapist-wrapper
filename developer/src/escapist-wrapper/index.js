import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: blue;
  border: 2px solid palevioletred;
`;

class EscapistWrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

export default EscapistWrapper
