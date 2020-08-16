import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width ? props.width : 42}px;
  height: ${props => props.height ? props.height : 42}px;
  border-radius: ${props => props.width ? props.width / 2 : 21}px;
  background-color: ${props => props.theme.colors.AthensGray3};
`

export const Icon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`
