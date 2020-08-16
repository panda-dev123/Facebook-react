// @flow
import React from 'react'
import { Container, Image } from './styles'

export const CircleAvatar = (props) => {
  const { containerStyle, width, height, src, className } = props
  return (
    <Container
      style={containerStyle}
      className={className}
      width={width}
      height={height}
    >
      <Image
        src={src}
        width={width}
        height={height}
      />
    </Container>
  )
}
