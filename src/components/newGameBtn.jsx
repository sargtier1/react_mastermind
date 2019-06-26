import React from 'react'
import styled from 'styled-components'

const NewGameBtn = () => {
  return (
    <NewGameBtnComponent>
      <p>New Game Btn</p>
    </NewGameBtnComponent>
  )
}

const NewGameBtnComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`

export default NewGameBtn
