import React from 'react'
import styled from 'styled-components'

const ColorPicker = () => {
  return (
    <ColorPickerComponent>
      <p>Color Picker here</p>
    </ColorPickerComponent>
  )
}

const ColorPickerComponent = styled.div`
  border: 2px dotted red;
  margin: 4px;
  padding: 4px;
`

export default ColorPicker
