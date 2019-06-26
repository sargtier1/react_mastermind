import React, { Component } from 'react'

import Header from './components/header'
import GameBoard from './components/gameBoard'

import ColorPicker from './components/colorPicker'
import GameTime from './components/gameTime'
import NewGameBtn from './components/newGameBtn'

import Footer from './components/footer'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <GameBoard />
        <ColorPicker />
        <GameTime />
        <NewGameBtn />
        <Footer />
      </div>
    )
  }
}
