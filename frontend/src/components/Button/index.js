// @flow
import React from 'react'
import { Container, Title } from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'


export const Button = (props) => {
  const { containerStyle, title, outline, onClick } = props
  // you can switch the theme
  const theme = LightTheme
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={containerStyle}
        outline={outline}
        onClick={onClick}
      >
        <Title outline={outline}>{title}</Title>
      </Container>
    </ThemeProvider>
  )
}
