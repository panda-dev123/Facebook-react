// @flow
import React from 'react'
import {
  Container, Image, Title, GrayText, BlueText, CheckboxContainer,
  StyledButton
} from './styles'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { LightTheme } from '../../constants/themes'
import { PopupDialogPanel } from '../PopupDialogPanel'
import { Checkbox } from '../Checkbox'


export const GripeZonePopup = (props) => {
  const theme = LightTheme
  const { containerStyle, className, closeVenting} = props
  return (
    <ThemeProvider theme={theme}>
      <PopupDialogPanel
        style={containerStyle}
        className={className}
        onCloseButton={closeVenting}
      >
        <Container>
          <Image src={theme.images.gripeZoneImage} />
          <Title>Entering the Gripe Zone</Title>
          <CheckboxContainer>
            <Checkbox label='' />
            <GrayText>Please agree to the</GrayText>
            <BlueText>rules</BlueText>
            <GrayText>before entering</GrayText>
          </CheckboxContainer>
          <StyledButton
            title='Enter'
            onClick={() => { /* TODO */ }}
          />
        </Container>
      </PopupDialogPanel>
    </ThemeProvider>
  )
}

GripeZonePopup.propTypes = {
  closeVenting: PropTypes.func.isRequired
}
