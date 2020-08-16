// @flow
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'
import {
  Container,  Input, IconsContainer,
  SmileyIcon, CameraIcon, GifIcon, ImageIcon, IconsSpacer,
  PlusIcon
} from './styles'


export const AddCommentInputBar = (props) => {
  const theme = LightTheme
  const {
    containerStyle, className, onClickSmiley,
    onClickCamera, onClickGif, onClickImage
  } = props

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={containerStyle}
        className={className}
      >
          <IconsContainer>
            <SmileyIcon src={theme.images.smileyIconGray} onClick={onClickSmiley} />
            <IconsSpacer />
            <CameraIcon src={theme.images.cameraIconGray} onClick={onClickCamera} />
            <IconsSpacer />
            <GifIcon src={theme.images.gifIconGray} onClick={onClickGif} />
            <IconsSpacer />
            <ImageIcon src={theme.images.imageGenericIconGray} onClick={onClickImage} />
          </IconsContainer>
      </Container>
    </ThemeProvider>
  )
}
