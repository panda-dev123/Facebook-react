import styled from 'styled-components'
import { Button } from '../Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;  
  padding-bottom: 40px;
`

export const Image = styled.img`
  width: 178px;
  height: 181px;
  margin-top: 55px;
  margin-bottom: 56px;
`

export const Title = styled.div`
  color: ${props => props.theme.colors.Shark2};
  font-family: Roboto-Bold;
  font-size: 26px;
  letter-spacing: 0.22px;
`

export const GrayText = styled.div`
  color: ${props => props.theme.colors.Nevada};
  font-family: Roboto-Regular;
  font-size: 14px;
  letter-spacing: 0.55px;
`

export const BlueText = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.Cerulean};
  font-family: Roboto-Regular;
  font-size: 14px;
  letter-spacing: 0.55px;
  margin-left: 4px;
  margin-right: 4px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 86px;
  margin-right: 87px;

  @media (max-width: ${p => p.theme.screen.sm}) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const StyledButton = styled(Button)`
  margin-bottom: 48px;  
`
