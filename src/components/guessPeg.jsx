import React from 'react'
import styled from 'styled-components'

export default function GuessPeg() {
  return (
    <GuessPegComponent>
      <h1>Guess Peg (singular)</h1>
    </GuessPegComponent>
  )
}

const GuessPegComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
