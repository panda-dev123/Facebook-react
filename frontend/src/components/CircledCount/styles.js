import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;  
  align-items: center;
  justify-content: center;  
  height: 16px;
  background-image:${props => props.gradient ? 'linear-gradient(to top left, ' + props.color1 + ',' + props.color2 + ')' : 'none'};
  background-color:${props => !props.gradient ? props.color1 : 'none'};
  border-color: ${props => props.borderColor};
  border-width: 2px;
  border-radius: 8px;
  border-style: solid;
  box-sizing: border-box;
`

export const CountText = styled.div`  
  color: ${props => props.theme.colors.White};
  font-family: Roboto-Bold;
  font-size: 10px;  
  margin-left: 3px;
  margin-right: 3px;
`
