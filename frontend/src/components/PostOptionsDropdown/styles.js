import styled from 'styled-components'

export const Container = styled.div`
  width: 261px;
  position: absolute;
  background-color: white;
  right: 23px;
  margin-top: -23px;
`

export const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
  &:hover {
    background-color: ${props => props.theme.colors.AthensGray3};
  }
`

export const IconContainer = styled.div`
  display: flex;
  width: 17px;
  height: 17px;
  margin-left: 17px;
  margin-right: 14px;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Text = styled.div`
  color: ${props => props.theme.colors.Shark};
  font-family: Roboto-Regular;
  font-size: 13px;
`

export const TextBold = styled.div`
  color: ${props => props.theme.colors.Shark};
  font-family: Roboto-Bold;
  font-size: 13px;
  margin-left: 4px;
  margin-right: 4px;
`
