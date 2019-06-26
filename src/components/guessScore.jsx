import React from 'react'
import styled from 'styled'

export default function GuessScore() {
  return (
    <GuessScoreComponent>
      <h1>Guess Score</h1>
    </GuessScoreComponent>
  )
}

const GuessScoreComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
