import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;  
  flex-direction: row;
  padding-bottom: 7px;
  max-width: 240px;  
`

export const Text = styled.div`
  color: ${props => props.theme.colors.ShuttleGray};
  font-family: Roboto-Regular;
  font-size: 14px;
  letter-spacing: 0.15px;
`

export const Link = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.Cerulean};
  font-family:Roboto-Medium;
  font-size: 14px;
  letter-spacing: -0.1px;
`

export const LabelContainer = styled.div`
  height: 16px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.DustyGray2};
  margin-left: 5px;
`

export const LabelText = styled.div`
  color: ${props => props.theme.colors.White};
  font-family: Roboto-Bold;
  font-size: 12px;
  letter-spacing: 0.35px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: grey;
  padding: 0 8px;
  border-radius: 3px;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`

export const Icon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  object-fit: contain;
`
