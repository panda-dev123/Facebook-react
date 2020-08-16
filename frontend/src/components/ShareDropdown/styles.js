import styled from 'styled-components'

export const Container = styled.div`

`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  margin-left: 17px;
  margin-right: 14px;
`

export const Icon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`

export const ListItem = styled.div`
  cursor: pointer;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background-color: ${props => props.theme.colors.AthensGray3};
  }
`

export const Text = styled.div`
  color: ${props => props.theme.colors.Shark};
  font-family: Roboto-Regular;
  font-size: 13px;
`
