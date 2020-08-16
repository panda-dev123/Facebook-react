import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Mutation, withApollo } from 'react-apollo';

import { GET_AUTH_USER, GET_USER } from 'graphql/user';
import { GET_POST, GET_POSTS, GET_FOLLOWED_POSTS } from 'graphql/post';
import { CREATE_COMMENT } from 'graphql/comment';

import { Textarea, Button } from './Form';

import { NotificationType } from 'constants/NotificationType';

import { useNotifications } from 'hooks/useNotifications';
import { AddCommentInputBar } from 'components/AddCommentInputBar';

import { useStore } from 'store';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1;  
  flex-direction: row;
  height: 42px;
  border-radius: 21px;
  background-color: #F2F3F5;
  margin-left: 13px;
  align-items: center;  
`

export const Input = styled.input`
  color: ${props => props.theme.colors.Black};
  outline: none;
  border-style: none;
  font-family: Roboto-Regular;
  font-size: 16px;
  background-color: transparent;  
  flex: 1;
  padding-left: 24px;
  padding-right: 8px;

  ::placeholder{
    color:#000000
  }
`

/**
 * Creates a comment for a post
 */
const CreateComment = ({ post, focus }) => {
  const [{ auth }] = useStore();
  const notification = useNotifications();
  const [comment, setComment] = useState('');
  const buttonEl = useRef(null);
  const TextareaEl = useRef(false);

  useEffect(
    () => {
      focus && TextareaEl.current.focus();
    },
    [focus]
  );

  const handleSubmit = async (e, createComment) => {
    e.preventDefault();
    const { data } = await createComment();
    setComment('');

    // Create notification on comment
    if (auth.user.id !== post.author.id) {
      notification.create({
        user: post.author,
        postId: post.id,
        notificationType: NotificationType.COMMENT,
        notificationTypeId: data.createComment.id,
      });
    }
  };

  const onEnterPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      buttonEl.current.click();
    }
  };

  return (
    <Mutation
      mutation={CREATE_COMMENT}
      variables={{ input: { comment, author: auth.user.id, postId: post.id } }}
      refetchQueries={() => [
        { query: GET_FOLLOWED_POSTS, variables: { userId: auth.user.id } },
        { query: GET_USER, variables: { username: auth.user.username } },
        { query: GET_AUTH_USER },
        { query: GET_POSTS, variables: { authUserId: auth.user.id } },
        { query: GET_POST, variables: { id: post.id } },
      ]}
    >
      {(createComment, { loading }) => (
        <Form onSubmit={e => handleSubmit(e, createComment)}>
          
          <InputContainer>
            <Input
              onChange={e => setComment(e.target.value)}
              value={comment}
              placeholder="Add a comment..."
              onKeyDown={onEnterPress}
              ref={TextareaEl}
              placeholder='Add comment'
            />
            <AddCommentInputBar />
          </InputContainer>
          <Button
            type="submit"
            color={comment ? 'primary.main' : 'grey[500]'}
            weight="bold"
            text
            ref={buttonEl}
            disabled={!comment || loading}
          >
          </Button>
        </Form>
      )}
    </Mutation>
  );
};

CreateComment.propTypes = {
  post: PropTypes.object.isRequired,
  focus: PropTypes.bool,
  client: PropTypes.object.isRequired,
};

export default withApollo(CreateComment);
