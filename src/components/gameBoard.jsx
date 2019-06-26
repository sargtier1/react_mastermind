import React from 'react'
import styled from 'styled-components'

import GuessRow from './guessRow'

const GameBoard = () => {
  return (
    <GameBoardComponent>
      <p>Gameboard Here</p>
      <GuessRow />
      <GuessRow />
    </GameBoardComponent>
  )
}

const GameBoardComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`

export default GameBoard
