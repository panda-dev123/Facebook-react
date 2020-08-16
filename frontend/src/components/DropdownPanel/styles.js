import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  border-style: solid;
  border-width: 0.5px;
  border-color: rgba(0,0,0,0.2);
  border-radius: 4.5px;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.3);
`

export const Triangle = styled.img`
  position: absolute;
  top: -20px;
  right: ${props => props.arrowRightPos ? props.arrowRightPos : 10}px;
  width: 54px;
  height: 20px;
`
