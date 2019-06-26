import React from 'react'
import styled from 'styled-components'

const GameBoard = () => {
  return (
    <GameBoardComponent>
      <h1>Gameboard Here</h1>
      <p>soon to be available</p>
    </GameBoardComponent>
  )
}

const GameBoardComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`

export default GameBoard
