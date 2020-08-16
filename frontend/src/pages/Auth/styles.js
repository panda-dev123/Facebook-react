import styled from 'styled-components'

export const Container = styled.div`
  margin-top:30px;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 350px;
  margin: auto;
  @media only screen and (max-width: 768px) {
    //phones, 600px and down    
    width: 330px;
  }
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  border-radius: 20px;
`

export const LabelText = styled.div`
  color: ${props => props.theme.colors.Nevada};
  font-size: 12px;
  font-family: Roboto-Medium;
  letter-spacing: 0.1px;
  width: 330px;
  margin: auto;
  margin-bottom: 11px;
  font-family: Roboto-Regular;
`

export const Icon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left: 12px;
`

export const TextInput = styled.input`
  flex: 1;
  color: ${props => props.theme.colors.Nevada};
  font-family: ${props => props.theme.fonts.RobotoMedium};
  font-size: 13px;
  letter-spacing: 0.7px;
  &::placeholder {
    color: ${props => props.theme.colors.AthensGray2};
  }
  outline: none;
  border-style: none;
  margin-left: 12px;
`