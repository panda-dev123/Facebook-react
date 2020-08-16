import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const AvatarOuterContainer = styled.div`
  position: relative;
  margin-right: 16px;
  @media only screen and (max-width: 600px) {
    margin-right: 8px;
  }
`

export const Name = styled.div`
  flex: 1;
  color: ${props => props.theme.colors.White};
  font-family: Roboto-Medium;
  font-size: 16px;
  margin-right: 24.5px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const Chevron = styled.img`
  cursor: pointer;
  width: 14px;
  height: 8px;
  object-fit: contain;
`
