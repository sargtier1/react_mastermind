import React from 'react'
import styled from 'styled-components'

export default function GuessPegs() {
  return (
    <GuessPegsComponent>
      <p>Guess Pegs</p>
    </GuessPegsComponent>
  )
}

const GuessPegsComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
