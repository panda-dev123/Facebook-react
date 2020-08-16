import React from 'react';
import theme from 'theme';
import help from '../../assets/images/warning-solid-gray.png'
import styled from 'styled-components';


const StyledCircledIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width ? props.width : 42}px;
  height: ${props => props.height ? props.height : 42}px;
  border-radius: ${props => props.width ? props.width / 2 : 21}px;
  background-color:  rgb(242, 243, 245);
`

const Icon = styled.img`
  width: 18px;
  height: 18px;
`
export const HelpsIcon = () => {

  return (
    <StyledCircledIcon>
      <Icon src={help} />
    </StyledCircledIcon>

  );
};

