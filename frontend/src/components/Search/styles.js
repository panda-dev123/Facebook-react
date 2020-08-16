import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 230px;
  height: 39px;
  align-items: center;
  border-radius: 19.5px;
  background-color: rgba(0,0,0,0.2);
`

export const Magnifier = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  margin-left: 12px;
  margin-right: 10px;
`

export const TextInput = styled.input`
  color: ${props => props.theme.colors.White};
  font-family: Roboto-Regular;
  font-size: 16px;
  outline: none;
  border-style: none;
  background-color: ${props => props.theme.colors.Transparent};
  &::placeholder {
    color: ${props => props.theme.colors.White};
  }
`
