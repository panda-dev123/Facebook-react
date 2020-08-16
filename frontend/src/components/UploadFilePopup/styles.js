import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 430px;
  flex-direction: column;
  align-items: center;
  border-width: 1px;
  border-radius: 8px;
  border-style: dashed;
  border-color: rgba(0,0,0,0.2);
  margin: 21px;
  
  @media (max-width: ${p => p.theme.screen.sm}) {
    width: 100%;
    margin: 0px;
  }
`

export const Image = styled.img`
  width: 108px;
  height: 72px;
  margin-top: 97px;
  margin-bottom: 37px;
`

export const Input = styled.input`
  display: none;
`;

export const Title = styled.div`
  color: #1D1F23;
  font-family: Roboto-Regular;
  font-size: 18px;
  line-height: 21px; 
`

export const GrayText = styled.div`
  color: ${props => props.theme.colors.ShuttleGray};
  font-family: ${props => props.theme.fonts.RobotoRegular};
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Dragdiv = styled.div`
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    display:flex;
`

export const BlueText = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.Cerulean};
  font-family: ${props => props.theme.fonts.RobotoRegular};
  font-size: 14px;
  text-decoration: underline;
  margin-bottom: 59px;
`

export const CloseButton = styled.img`
  position: absolute;
  cursor: pointer;
  top: 11px;
  right: 11px;  
  width: 10px;
  height: 10px;
`

export const Label = styled.label`
cursor: pointer;
flex-direction: column;
align-items: center;
display:flex;
`;

export const ImagePreview = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
