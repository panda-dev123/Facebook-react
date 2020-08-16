// @flow
import React from 'react'
import { Container, Text, Icon } from './styles'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components';
import { LightTheme } from '../../constants/themes'


const Logoimage = styled.img`
  width: 110px;
  height: 34px;
  margin-left: 4.5px;
`
export const Logo = (props) => {
  const theme = LightTheme
  const { containerStyle, className } = props
  return (
    <ThemeProvider theme={theme}>
      <Container className={className} style={containerStyle}>
        <Logoimage src={theme.images.osIconWhite} />
      </Container>
    </ThemeProvider>
  )
}
