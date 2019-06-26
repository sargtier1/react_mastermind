import React, { Component } from 'react'

import Header from './components/header'
import GameBoard from './components/gameBoard'
import GuessRow from './components/guessRow'
import GuessPegs from './components/guessPegs'
import GuessPeg from './components/guessPeg'
import GuessScore from './components/guessScore'

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
