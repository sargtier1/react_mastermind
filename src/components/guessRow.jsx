import React from 'react'

export default function GuessRow() {
  return (
    <GuessRowComponent>
      <h1>Guess Row</h1>
    </GuessRowComponent>
  )
}

const GuessRowComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`
