import React from 'react'
import styled from 'styled-components'

export default function GameTime() {
  return (
    <GameTimeComponent>
      <h1>Game timer</h1>
    </GameTimeComponent>
  )
}

const GameTimeComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
