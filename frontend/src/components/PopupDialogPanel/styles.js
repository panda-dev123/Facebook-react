import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;  
  min-width: 100px;
  min-height: 100px;
  left: 155px;
  z-index: 99;
  border-radius: 13px;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12);
  background-color: ${props => props.theme.colors.White}; 

  @media (max-width: ${p => p.theme.screen.sm}) {
    left: 0px;
    width: 100%;
  }
`

export const CloseIcon = styled.img`
  cursor: pointer;
  position: absolute;
  width: 10px;
  height: 10px;
  top: 13px;
  right: 13px;
`
