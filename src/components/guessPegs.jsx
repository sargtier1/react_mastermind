import React from 'react'
import styled from 'styled-components'
import GuessPeg from './guessPeg'

export default function GuessPegs() {
  return (
    <GuessPegsComponent>
     <p>Guess Pegs (plural)</p>
      <GuessPeg />
      <GuessPeg />
      <GuessPeg />
      <GuessPeg />
    </GuessPegsComponent>
  )
}

const GuessPegsComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
