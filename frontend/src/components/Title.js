import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Image=styled.img`
    width: 20px;
    height: 5px;
    margin-top: 14px;
    margin-right: 30px;
}
`

export const Text = styled.p`
    font-size: 16px;
    font-family: Roboto-Bold;
    margin-top: 5px;
    margin-left: 11px;
    color: #3E4347;
`

export const Root = styled.div`
    display: flex;
    justify-content: space-between;
`

const ContentTitle = ({text }) => (
    <Root>
        <Text>{text}</Text>
        <Image src={require('../assets/images/three-dots-icon.png')} />
    </Root>
  );
  
  ContentTitle.propTypes = {
    text: PropTypes.string,
  };
  
  export default ContentTitle;