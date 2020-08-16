// @flow
import React from 'react'
import {
  Container, Icon
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'


export const CircledIcon = (props) => {
  const theme = LightTheme
  const {
    containerStyle, className, src,
    iconWidth, iconHeight, width, height
  } = props
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={containerStyle}
        className={className}
        width={width}
        height={height}
      >
        <Icon
          src={src}
          width={iconWidth}
          height={iconHeight}
        />
      </Container>
    </ThemeProvider>
  )
}
