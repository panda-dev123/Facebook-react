import React from 'react';
import mobileimage from '../assets/images/mobileheader.png'
import styled from 'styled-components';

/**
 * display header in mobile
 */

const Image=styled.img`
  display: none; 
  @media (max-width: 768px) {
    display: block;
  } 
`
const Mobileheader = () => (
    <Image style={{width: "100%"}} src={mobileimage} />
);

export default Mobileheader;
