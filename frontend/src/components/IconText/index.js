// @flow
import React from 'react'
import {
  Container, Text, Link, LabelContainer, LabelText,
  IconContainer, Icon
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'


export const IconText = (props) => {
  const theme = LightTheme
  const {
    containerStyle, className, text, link, label,
    iconSrc, iconWidth, iconHeight
  } = props
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={containerStyle}
        className={className}
      >
        <IconContainer>
          <Icon
            src={iconSrc}
            width={iconWidth}
            height={iconHeight}
          />
        </IconContainer>
        {text && (
          <Text>{text}</Text>
        )}
        {link && (
          <Link>{link}</Link>
        )}
        {label && (
          <LabelContainer>
            <LabelText>{label}</LabelText>
          </LabelContainer>
        )}
      </Container>
    </ThemeProvider>
  )
}
