// @flow
import React, { useState } from 'react'
import { Container, CheckboxContainer, Label, CheckIcon } from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'

export const Checkbox = (props) => {
  const theme = LightTheme
  const [checked, setChecked] = useState(false)
  const { containerStyle, className, label, onValueChange } = props

  return (
    <ThemeProvider theme={theme}>
      <Container style={containerStyle} className={className}>
        <CheckboxContainer onClick={() => {
          setChecked(!checked)
          if (onValueChange) {
            onValueChange(!checked)
          }
        }}
        >
          {checked && (<CheckIcon src={theme.images.checkIcon} />)}
        </CheckboxContainer>
        <Label>{label}</Label>
      </Container>
    </ThemeProvider>
  )
}
