import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { generatePath } from 'react-router-dom';
import styled from 'styled-components';
import { withApollo } from 'react-apollo';

import Comment from 'components/Comment';
import CreateComment from 'components/CreateComment';
import Like from 'components/Like';
import { DotsIcon, PostCommentIcon, ShareIcon } from 'components/icons';
import { Spacing } from 'components/Layout';
import { A, H3 } from 'components/Text';
import { Button } from 'components/Form';
import { BottomShareIcon } from 'components/ShareIcon';
import { WaveIcon } from 'components/WaveIcon';
import Avatar from 'components/Avatar';
import { ShareDropdown } from 'components/ShareDropdown';
import { PostOptionsDropdown } from 'components/PostOptionsDropdown';
import { GET_FOLLOWED_POSTS, DELETE_POST } from 'graphql/post';
import { GET_AUTH_USER } from 'graphql/user';
import { GET_USER_POSTS } from 'graphql/user';

import {
  HOME_PAGE_POSTS_LIMIT,
  PROFILE_PAGE_POSTS_LIMIT,
} from 'constants/DataLimit';

import { useStore } from 'store';

import * as Routes from 'routes';

import { currentDate } from 'utils/date';

const Root = styled.div`
  width: 100%;
  border-radius: ${p => p.theme.radius.lg};
  padding-bottom: 25px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border.main};
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${p => p.theme.spacing.xs} ${p => p.theme.spacing.sm};
`;

const CreatedAt = styled.div`
  font-size: 14px;
  color: ${p => p.theme.colors.text.hint};
  border-bottom: 1px solid ${p => p.theme.colors.text.secondary};
  border: 0;
  margin-top: 3px;
  font-family: Roboto-Regular;
  margin-right : 15px;
  line-height: 16px;
  color: #636972;
`;

const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.span`
  font-size: 16px;
  line-height: 19px;
  font-family: Roboto-Medium;
  color: #1D1F23;
  text-transform: capitalize;
`;

const Poster = styled.img`
  display: block;
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

const BottomRow = styled.div`
  overflow: hidden;
`;

const CountAndIcons = styled.div`
  padding: 0 ${p => p.theme.spacing.sm};
`;

const Count = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${p => p.theme.spacing.xs};
  font-size: ${p => p.theme.font.size.xs};
  color: ${p => p.theme.colors.text.secondary};
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${p => p.theme.colors.border.main};
`;

const Comments = styled.div`
  padding: 0 ${p => p.theme.spacing.sm};
`;

const StyledButton = styled(Button)`
  padding: 0;
  padding-left: 4px;
  font-size: ${p => p.theme.font.size.xxs};
`;

const CommentLine = styled.div`
  margin-bottom: 5px;
  border-top: 1px solid ${p => p.theme.colors.border.main};
  margin-top: 15px;
`;

const Commentcontent = styled.div`
    display: flex;
    margin-left: 30px;
`
const ShareshowIcon = styled.div`
    display: flex;
    text-decoration: none;
    color: darkgrey;
    font-size: 16px;
    width: 100%;
    justify-content: right;
    padding: 10px 20px;

`

const PostBottom = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }

`

const GlobalShare = styled.div`
  display: flex;
  padding-left: 20px;
  @media (max-width: 768px) {
    padding-left: 0px;
  } 
`
const Text = styled.p`
  padding-left: 10px;
  padding-right: 5px;
  color : #636972;
  font-family: Roboto-Regular;
  font-size: 14px;
`
const TextDetails = styled.p`
  color : #333333;    
  font-family: Roboto-Regular;
  font-size: 14px;  
`

const Status = styled.div`
  display: flex;
  padding-left: 20px;
`

const Createtime = styled.div`
  display: flex;
`
const Span = styled.div`
  text-transform: capitalize;
  line-height: 16px;
  color: #636972;
  font-family: Roboto-Regular;
  font-size: 14px;
  margin-top: 3px;
`

const ButtomText = styled.b`
  font-family: Roboto-Regular;
  size: 16px;
  line-height: 19px;
  color: rgb(0, 0, 0, 0.54)
`
/**
 * Component for rendering user post
 */
const PostCard = ({
  author,
  imagePublicId,
  comments,
  title,
  category,
  createdAt,
  image,
  likes,
  postId,
  openModal,
  client,
}) => {
  const [{ auth }] = useStore();
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [sharevisible, setShareVisible] = useState(false)

  const toggleCreateComment = () => {
    setIsCommentOpen(true);
  };

  const toggleComment = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const closeOption = () => setIsOptionOpen(false);

  const openOption = () => setIsOptionOpen(!isOptionOpen);

  const ShareDropdownVisible = () => setShareVisible(!sharevisible)

  const deletePost = async () => {
    try {
      await client.mutate({
        mutation: DELETE_POST,
        variables: { input: { id: postId, imagePublicId } },
        refetchQueries: () => [
          {
            query: GET_FOLLOWED_POSTS,
            variables: {
              userId: auth.user.id,
              skip: 0,
              limit: HOME_PAGE_POSTS_LIMIT,
            },
          },
          { query: GET_AUTH_USER },
          {
            query: GET_USER_POSTS,
            variables: {
              username: auth.user.username,
              skip: 0,
              limit: PROFILE_PAGE_POSTS_LIMIT,
            },
          },
        ],
      });
    } catch (err) { }

    setIsOptionOpen(false);
  };

  return (
    <>
      <Root>

        <TopRow>
          <Author
            to={generatePath(Routes.USER_PROFILE, {
              username: author.username,
            })}
          >
            <Avatar image={author.image} size={42} />

            <Spacing left="xs">
              <Name>{author.fullName}</Name>
              <Createtime>
                <CreatedAt>{currentDate(createdAt)}</CreatedAt><Span>{category}</Span>
              </Createtime>
            </Spacing>
          </Author>

          <Button ghost onClick={openOption}>
            <DotsIcon />
          </Button>
        </TopRow>

        {isOptionOpen &&
          <PostOptionsDropdown />
        }
        <Spacing left="sm" bottom="sm" top="xs">
          <H3>{title}</H3>
        </Spacing>

        {image && <Poster src={image}  />}
        <PostBottom>
          <GlobalShare>
            <BottomShareIcon />
            <Text>Global Shares: </Text>
            <TextDetails>5.4M</TextDetails>
          </GlobalShare>
          <Status>
            <WaveIcon />
            <Text>Status:</Text>
            <TextDetails>Trending</TextDetails>
          </Status>
        </PostBottom>
        <BottomRow>
          <CountAndIcons>
            <Icons>
              <Like
                fullWidth
                withText
                user={author}
                postId={postId}
                likes={likes}
              />

              <Button fullWidth text onClick={toggleCreateComment}>
                <PostCommentIcon /> <Spacing inline left="xxs" /> <ButtomText>Comment</ButtomText>
              </Button>
              <ShareshowIcon onClick={() => ShareDropdownVisible()}>
                <ShareIcon /> <Spacing inline left="sm" /> <ButtomText>Share</ButtomText>
              </ShareshowIcon>
            </Icons>
          </CountAndIcons>
          {sharevisible &&
            <ShareDropdown />
          }
          <Spacing top="xs">
            <Commentcontent>
              <Avatar image={auth.user.image} size={42} />
              <CreateComment
                post={{ id: postId, author }}
                focus={isCommentOpen}
              />
            </Commentcontent>
          </Spacing>

          {comments.length > 0 && <CommentLine />}

          <Comments>
            {comments.map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                postId={postId}
                postAuthor={author}
              />
            ))}
          </Comments>
        </BottomRow>
      </Root>
    </>
  );
};

PostCard.propTypes = {
  author: PropTypes.object.isRequired,
  imagePublicId: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  likes: PropTypes.array.isRequired,
  comments: PropTypes.array,
  createdAt: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

export default withApollo(PostCard);
