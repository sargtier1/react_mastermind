import React from 'react'
import styled from 'styled-components'

export default function GuessPegs() {
  return (
    <GuessPegsComponent>
      <h1>Guess Pegs</h1>
    </GuessPegsComponent>
  )
}

const GuessPegsComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
