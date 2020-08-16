import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  max-width: 259px;
  height: 48px;
  border-radius: 13px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  border-color: ${props => props.theme.colors.Alto};
  margin-top: 30px;
  @media(max-width: 768px){
    max-width: unset;
    margin-top: 30px;
  }
`

export const Title = styled.div`
  color: ${props => props.theme.colors.MineShaft};
  font-family: Roboto-Regular;
  font-size: 16px;
`
