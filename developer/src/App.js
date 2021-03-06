import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import EscapistWrapper from './escapist-wrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-Body">
          <EscapistWrapper>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </EscapistWrapper>
        </div>
      </div>
    )
  }
}

export default App
