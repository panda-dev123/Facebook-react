// @flow
import React from 'react'
import {
  Container, Triangle
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'

export const DropdownPanel = (props) => {
  const theme = LightTheme
  const { containerStyle, className, children, arrowRightPos } = props
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={containerStyle}
        className={className}
      >
        {children}
        <Triangle
          src={theme.images.curvedTriangleWhite}
          arrowRightPos={arrowRightPos}
        />
      </Container>
    </ThemeProvider>
  )
}
