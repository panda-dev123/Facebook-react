import React from 'react';
import theme from 'theme';
import { get } from 'lodash';
import Save from '../../assets/images/save-outline-icon-gray.png'

/**
 * Post like icon
 *
 * @param {string} width
 * @param {string} color
 */
export const LikeIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '18';
  const DEFAULT_COLOR = theme.colors.text.secondary;
  return (
    <img src={Save} style={{height: 20}} />
  );
};
