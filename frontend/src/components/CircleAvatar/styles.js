import styled from 'styled-components'

export const Container = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  overflow: hidden;
  border-radius: ${props => props.width / 2}px;
`

export const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`
