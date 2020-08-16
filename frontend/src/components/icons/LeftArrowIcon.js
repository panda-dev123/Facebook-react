import React from 'react';
import styled from 'styled-components';
import LeftArrow from '../../assets/images/leftArrowIcon.png'


/**
 * LeftArrow icon
 *
 */

const Image = styled.img`
    width: 19px;
    height: 19px;
    margin-top: 10px;
    margin-left: 20px;
`
export const LeftArrowIcon = () => {

  return (
    <Image src={LeftArrow} />
  );
};
