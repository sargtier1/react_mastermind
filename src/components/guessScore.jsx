import React from 'react'
import styled from 'styled-components'

export default function GuessScore() {
  return (
    <GuessScoreComponent>
      <p>Guess Score</p>
    </GuessScoreComponent>
  )
}

const GuessScoreComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
