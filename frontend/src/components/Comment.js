import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generatePath } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import { CloseIcon } from 'components/icons';
import { A } from './Text';
import { Spacing } from './Layout';
import Avatar from 'components/Avatar';
import { timeAgo } from 'utils/date';

import { GET_AUTH_USER, GET_USER } from 'graphql/user';
import { DELETE_COMMENT } from 'graphql/comment';
import { GET_POST, GET_POSTS, GET_FOLLOWED_POSTS } from 'graphql/post';

import { useNotifications } from '../hooks/useNotifications';

import { useStore } from 'store';

import * as Routes from 'routes';

const DeleteButton = styled.button`
  cursor: pointer;
  display: none;
  background-color: transparent;
  border: 0;
  outline: 0;
  position: absolute;
  right: 7px;
  top: 6px;
`;

const Root = styled.div`
  display: flex;
  flex-direction: row;
  padding:5px 10px;
  font-size: ${p => p.theme.font.size.xxs};

  &:hover ${DeleteButton} {
    display: block;
  }
`;

const UserName = styled.div`
  color: black;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size : 16px;
  text-transform: capitalize;
  line-height: 19px;
`;

const CommentSection = styled.div`
  position: relative;
  word-wrap: break-word;
  overflow: hidden;
  padding: 0 ${p => p.theme.spacing.lg} ${p => p.theme.spacing.xxs}
    10px;
  border-radius: ${p => p.theme.radius.lg};
  margin-left: ${p => p.theme.spacing.xxs};
  color: ${p => p.theme.colors.text.main};
  width: 100%;
`;

const CommentContent = styled.p`
  font-size: 14px;
  font-family: Roboto-Regular;
  line-height: 18px;
  color: #1D1F23;
`

const Reply = styled.button`
  color: #009DE8;
  border: none;
  background-color: white;
  font-size: 14px;
  padding: 0px;
  font-family: Roboto-Regular;
`

/**
 * Renders comments UI
 */
const Comment = ({ comment, postId, postAuthor }) => {
  const [{ auth }] = useStore();
  const notification = useNotifications();

  const handleDeleteComment = async deleteComment => {
    await deleteComment();

    // Delete notification after comment deletion
    if (auth.user.id !== postAuthor.id) {
      const isNotified = postAuthor.notifications.find(
        n => n.comment && n.comment.id === comment.id
      );
      notification.remove({
        notificationId: isNotified.id,
      });
    }
  };

  return (
    <Mutation
      mutation={DELETE_COMMENT}
      variables={{ input: { id: comment.id } }}
      refetchQueries={() => [
        { query: GET_FOLLOWED_POSTS, variables: { userId: auth.user.id } },
        { query: GET_USER, variables: { username: comment.author.username } },
        { query: GET_AUTH_USER },
        { query: GET_POSTS, variables: { authUserId: auth.user.id } },
        { query: GET_POST, variables: { id: postId } },
      ]}
    >
      {deleteComment => {
        return (
          <Root>
            <a
              to={generatePath(Routes.USER_PROFILE, {
                username: comment.author.username,
              })}
            >
              <Avatar image={comment.author.image} size={42} />
            </a>

            <CommentSection>
              {comment.author.id === auth.user.id && (
                <DeleteButton
                  onClick={() => handleDeleteComment(deleteComment)}
                >
                  <CloseIcon width="10" />
                </DeleteButton>
              )}

              <Spacing top="xxs" />

              <Spacing inline right="xxs">
                <UserName>{comment.author.fullName}</UserName>
              </Spacing>
              <CommentContent>
                {comment.comment}
              </CommentContent>
              <Reply>Reply</Reply>
            </CommentSection>
          </Root>
        );
      }}
    </Mutation>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  postAuthor: PropTypes.object.isRequired,
};

export default Comment;
