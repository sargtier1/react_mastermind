import React from 'react'
import styled from 'styled-components'
import GuessPegs from './guessPegs'
import GuessScore from './guessScore'

const GuessRow = () => {
  return (
    <GuessRowComponent>
      <p>Guess Row #</p>
      <GuessPegs />
      <GuessScore />
    </GuessRowComponent>
  )
}

const GuessRowComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
export default GuessRow
