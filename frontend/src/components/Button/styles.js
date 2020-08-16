import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 160px;
  @media only screen and (max-width: 768px) {
    //phones, 768px and down    
    margin: auto;
    margin-top:30px;
    
  }
  border-radius: 20px;  
  background-color: ${props => props.theme.colors.Transparent};
  background-image: ${props => props.outline ? 'none' : 'linear-gradient(to left, ' + props.theme.colors.ElectricViolet2 + ',' + props.theme.colors.DodgerBlue + ')'};
  border-style: ${props => props.outline ? 'solid' : 'none'};
  border-width: 2px;
  border-color: ${props => props.theme.colors.ElectricViolet};
  box-sizing: border-box;
  box-shadow: ${props => props.outline ? 'none' : '0 10px 20px 0 rgba(144,19,254,0.2)'};
`

export const Title = styled.div`
  font-family: ${props => props.theme.fonts.RobotoMedium};
  font-size: 13px;
  letter-spacing: 0.51px;
  font-family: Roboto-Medium;
  color: ${props => props.outline ? props.theme.colors.ElectricViolet : props.theme.colors.White};
`
