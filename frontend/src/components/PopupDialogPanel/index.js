// @flow
import React from 'react'
import {
  Container, CloseIcon
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'

export const PopupDialogPanel = (props) => {
  const theme = LightTheme
  const { containerStyle, className, onCloseButton, children } = props
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={containerStyle}
        className={className}
      >
        {onCloseButton && (
          <CloseIcon
            src={theme.images.xIconGray}
            onClick={onCloseButton}
          />
        )}
        {children}
      </Container>
    </ThemeProvider>
  )
}
