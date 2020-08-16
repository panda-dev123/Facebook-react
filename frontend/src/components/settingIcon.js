import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Image=styled.img`
width: 8px;
height: 14px;
margin-top: 14px;
margin-right: -30px;
`

export const Text = styled.p`
    font-size: 16px;
    font-family: Roboto-Regular;
    margin-top: 5px;
    margin-left: 11px;
    color: rgba(0,0,0,0.54);
`

export const Root = styled.div`
    display: flex;
    width: 155px;
    justify-content: space-between;
`
const SettingIcon = ({text }) => (
    <Root>
        <Text>{text}</Text>
        <Image src={require('../assets/images/arrow_right.png')} />
    </Root>
  );
  
  SettingIcon.propTypes = {
    text: PropTypes.string,
  };
  
  export default SettingIcon;