// @flow
import React, { useCallback } from 'react'
import {
  Container, Image, Title, GrayText, BlueText,
  CloseButton, Input, Label, ImagePreview,Dragdiv
} from './styles'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'
import PropTypes from 'prop-types';
import { PopupDialogPanel } from '../PopupDialogPanel'
import Dropzone from 'react-dropzone'


export const UploadFilePopup = (props) => {
  const theme = LightTheme
  const { containerStyle, className, uploadimage, Drogimage, closeuploadimage, data } = props
  return (
    <ThemeProvider theme={theme}>
      <PopupDialogPanel
        style={containerStyle}
        className={className}
      >
        <Container>
        
            <Dropzone onDrop={Drogimage}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <Dragdiv {...getRootProps()}>
                    <input {...getInputProps()} />
                    {data ? (
                      <ImagePreview src={URL.createObjectURL(data)} />
                    ) :
                      <Image src={theme.images.cloudUploadIconBig} />
                    }
                    <Title>Drag & Drop files here</Title>
                  </Dragdiv>
                </section>
              )}
            </Dropzone>
              <Label htmlFor="postimage">
            <GrayText>or</GrayText>
            <Input
              name="image"
              onChange={uploadimage}
              type="file"
              id="postimage"
              accept="image/x-png,image/jpeg"
            />

            <BlueText>
              Browse Files
          </BlueText>
          </Label>
          <CloseButton src={theme.images.xIconGray} onClick={closeuploadimage} />
        </Container>
      </PopupDialogPanel>
    </ThemeProvider>
  )
}

UploadFilePopup.propTypes = {
  uploadimage: PropTypes.func.isRequired,
  Drogimage: PropTypes.func.isRequired,
  closeuploadimage: PropTypes.func.isRequired
};
