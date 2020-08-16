import React from 'react';
import theme from 'theme';
import PostComment from "../../assets/images/comment-outline-icon-gray.png"

/**
 * Post comment icon
 *
 * @param {string} width
 * @param {string} color
 */
export const PostCommentIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '18';
  const DEFAULT_COLOR = theme.colors.text.secondary;

  return (
    <img src={PostComment} style={{height: 20}}/>
  );
};
