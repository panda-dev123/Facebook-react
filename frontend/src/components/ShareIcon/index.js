// @flow
import React from 'react'
import {
  Container, Icon
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'


export const BottomShareIcon = (props) => {
  const theme = LightTheme
  const { containerStyle, className } = props
  return (
    <ThemeProvider theme={theme}>
      <Container style={containerStyle} className={className}>
        <Icon src={theme.images.shareIconWhite} />
      </Container>
    </ThemeProvider>
  )
}
