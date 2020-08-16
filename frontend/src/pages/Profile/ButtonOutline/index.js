// @flow
import React from 'react'
import {
  Container, Title
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from 'constants/themes'
import PropTypes from 'prop-types';


export const ButtonOutline = (props) => {
  const theme = LightTheme
  const { containerStyle, className, title, EditProfile} = props
  return (
    <ThemeProvider theme={theme}>
      <Container
        onClick={EditProfile}
        style={containerStyle}
        className={className}
      >
        <Title>{title}</Title>
      </Container>
    </ThemeProvider>
  )
}

