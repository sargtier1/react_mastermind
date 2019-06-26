import React from 'react'
import styled from 'styled-components'

export default function GameTime() {
  return (
    <GameTimeComponent>
      <p>Game timer</p>
    </GameTimeComponent>
  )
}

const GameTimeComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
