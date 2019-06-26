import React from 'react'
import styled from 'styled-components'

const GuessRow = () => {
  return (
    <GuessRowComponent>
      <p>Guess Row #</p>
    </GuessRowComponent>
  )
}

const GuessRowComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
export default GuessRow