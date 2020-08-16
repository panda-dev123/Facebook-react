import React from 'react';
import styled from 'styled-components';
import { A } from 'components/Text';
import { Container } from 'components/Layout';
import backgroundImage from '../assets/images/background.png';
import Logo from '../assets/images/Logo.png'

const Root = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 50%;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat top / cover;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${p => p.theme.spacing.sm};

  @media (min-width: ${p => p.theme.screen.sm}) {
    justify-content: flex-end;
    position: absolute;
    top: 15px;
  }
`;


const AuthRight = () => {
  return (
    <Root>
      <StyledContainer maxWidth="lg">
        <img src={Logo} />
      </StyledContainer>
    </Root>
  );
};

export default AuthRight;