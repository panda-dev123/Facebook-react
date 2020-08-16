// @flow
import React from 'react'
import {
  Container, CountText
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'

export const CircledCount = (props) => {
  const theme = LightTheme
  const {
    containerStyle, className, count,
    gradient, color1, color2, borderColor
  } = props
  return (
    <ThemeProvider theme={theme}>
      <Container
        className={className}
        style={containerStyle}
        gradient={gradient}
        color1={color1}
        color2={color2}
        borderColor={borderColor}
      >
        <CountText>{count}</CountText>
      </Container>
    </ThemeProvider>
  )
}
