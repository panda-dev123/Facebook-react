import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckboxContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  border-color: ${props => props.theme.colors.AthensGray};
`

export const CheckIcon = styled.img`
  width: 10px;
  height: 10px;
  object-fit: contain;
`

export const Label = styled.div`
  color: ${props => props.theme.colors.Nevada};
  font-family: Roboto-Regular;
  font-size: 14px;
  letter-spacing: 0.55px;
  margin-left: 8px;
`
