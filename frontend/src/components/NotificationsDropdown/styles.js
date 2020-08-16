import styled from 'styled-components'
import {CircledIcon} from '../CircledIcon';

export const Container = styled.div`
  
`

export const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;   
  margin-bottom: 8px; 
  &:hover {
    background-color: ${props => props.theme.colors.AthensGray3};
  }
`

export const StyledCircledIcon = styled(CircledIcon)`
  margin-left: 14px;  
`

export const Text = styled.div`
  color: ${props => props.theme.colors.MineShaft};
  font-family: Roboto-Regular;
  font-size: 16px;
  margin-left: 8px;
`
