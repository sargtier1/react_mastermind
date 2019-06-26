import React from 'react'
import styled from 'styled-components'

const ColorPicker = () => {
  return (
    <ColorPickerComponent>
      <h2>Color Picker here</h2>
    </ColorPickerComponent>
  )
}

const ColorPickerComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`

export default ColorPicker
