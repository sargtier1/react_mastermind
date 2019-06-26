import React, { Component } from 'react'

import Header from './components/header'
import GameBoard from './components/gameBoard'
import Footer from './components/footer'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <GameBoard />
        <Footer />
      </div>
    )
  }
}
