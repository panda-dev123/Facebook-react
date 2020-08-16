import React, { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import { Spacing, Overlay, Container } from 'components/Layout';
import { Error } from 'components/Text';
import { Button } from 'components/Form';
import Avatar from 'components/Avatar';
import { UploadFilePopup } from 'components/UploadFilePopup'
import PostImageUpload from 'pages/Home/PostImageUpload';

import { GET_FOLLOWED_POSTS, CREATE_POST } from 'graphql/post';
import { GET_AUTH_USER, GET_USER_POSTS } from 'graphql/user';

import { useStore } from 'store';

import { PROFILE_PAGE_POSTS_LIMIT } from 'constants/DataLimit';
import { HOME_PAGE_POSTS_LIMIT } from 'constants/DataLimit';
import { MAX_POST_IMAGE_SIZE } from 'constants/ImageSize';

import { useGlobalMessage } from 'hooks/useGlobalMessage';

const Root = styled(Container)`
  border: 0;
  border: 1px solid ${p => p.theme.colors.border.main};
  padding: 0px 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 15px;
  
`;

const Textarea = styled.textarea`
  width: 100%;
  margin: 0 ${p => p.theme.spacing.xs};
  padding-top: 11px;
  padding-bottom :  0;
  border: 0;
  font-size :16px;
  height: 40px;
  outline: none;
  resize: none;
  font-family : Roboto-Regular;
  transition: 0.1s ease-out;
  font-size: ${p => p.theme.font.size.xs};
  border-radius: 13px;
  :-moz-placeholder {
    text-align: center;
  }
  ::-webkit-input-placeholder {
    text-align: center;
    color : #000000;
    font-size : 16px;
    font-family : Roboto-Regular;
  }

  @media(max-width: 768px){
    ::-webkit-input-placeholder {
      text-align: center;
      color : #000000;
      font-size : 16px;
      font-family : Roboto-Regular;
    }
}
`;

const ImagePreviewContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: ${p => p.theme.shadows.sm};
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${p => p.theme.colors.border.main};
  padding: ${p => p.theme.spacing.sm} 0;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
    width: 16px;
    margin-left: 10px;
    margin-top: 15px;
`
const Selectcolor = styled.a`
  
`

const ColorContent = styled.div`
  width : 400px;
  background-color: white;
  justify-content: space-around;
  display: flex;
  position: absolute;
  height: 50px;
  top: 67px;
  left: 0;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;

  :before{
    content: "";
    position: absolute;
    top: -15px;
    left: 92px;
    border: 8px solid var(--bg-inverse);
    border-color: transparent transparent var(--bg-inverse) var(--bg-inverse);
    -webkit-transform: translateX(-50%) rotate(135deg);
    -ms-transform: translateX(-50%) rotate(135deg);
    -webkit-transform: translateX(-50%) rotate(135deg);
    -ms-transform: translateX(-50%) rotate(135deg);
    transform: translateX(-50%) rotate(135deg);
    box-shadow: -2px 2px 3px rgba(57,73,76,.1);
    width: 19px;
    height: 20px;
    color: white;
    background-color: white;
  }

  @media(max-width: 768px){
    width : 100%;
    :before{
      left: 78px;
      width: 22px;
      height: 20px;
    }
`

const ItemColor = styled.div`
  cursor: pointer;
  width: 30px;
  height : 30px;
  border-radius: 20px;
  margin-top : 10px;
`

const PurpleItemColor = styled.div`
 cursor: pointer;
  background-color : #6E45ED;
  width: 30px;
  height : 30px;
  border-radius: 20px;
  margin-top : 10px;
`

const BuleItemColor = styled.div`
  cursor: pointer;
  background-color : #38E8FF;
  width: 30px;
  height : 30px;
  border-radius: 20px;
  margin-top : 10px;
`

const YellowContent = styled.div`
  cursor: pointer;
  background-color : #FEDD36;
  width: 30px;
  height : 30px;
  border-radius: 20px;
  margin-top : 10px;
`

const GreenItemColor = styled.div`
  cursor: pointer;
  background-color : #52D89E;
  width: 30px;
  height : 30px;
  border-radius: 20px;
  margin-top : 10px;
`

const BarlblueContent = styled.div`
  cursor: pointer;
  background-color : #FB5A00;
  width: 30px;
  height : 30px;
  border-radius: 20px;
  margin-top : 10px;
`

const RedContent = styled.div`
  cursor: pointer;
  background-color : #FE3853;
  width: 30px;
  height : 30px;
  border-radius: 20px;
  margin-top : 10px;
`

/**
 * Component for creating a post
 */
const CreatePost = ({ feed }) => {
  const [{ auth }] = useStore();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState("")
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const [visible, setvisible] = useState(false)
  const [isvisibleUploadImage, SetVisibleUplaodimage] = useState(false)
  const [Createcolor, SetCreatecolor] = useState("#f5f5f5")
  useEffect(() => {
    setCategory(feed);
  });

  const message = useGlobalMessage();

  const handleReset = () => {
    setTitle('');
    setImage('');
    setIsFocused(false);
    setError('');
  };

  const SetdefaultColor =()=>{
    SetCreatecolor("#f5f5f5")
  }

  const SetPurpleColor =()=>{
    SetCreatecolor("#6E45ED")
  }
  
  const SetBlueColor =()=>{
    SetCreatecolor("#38E8FF")
  }
  
  const SetGreenColor =()=>{
    SetCreatecolor("#52D89E")
  }
  const SetYellowColor =()=>{
    SetCreatecolor("#FEDD36")
  }
  const SetBarblueColor =()=>{
    SetCreatecolor("#FB5A00")
  }
  const SetRedColor =()=>{
    SetCreatecolor("#FE3853")
  }
  
  const isuploadImage = () => {
    SetVisibleUplaodimage(true)
  };

  const closeuploadimage = () => {
    SetVisibleUplaodimage(false)
  };

  const handleOnFocus = () => setIsFocused(true);
  const handleIconClick = () => {
    setvisible(!visible);
  }
  const handlePostImageUpload = e => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    if (!file) return;

    if (file.size >= MAX_POST_IMAGE_SIZE) {
      message.error(
        `File size should be less then ${MAX_POST_IMAGE_SIZE / 1000000}MB`
      );
      return;
    }

    setImage(file);

    setIsFocused(true);
    e.target.value = null;
  };

  const drogImageUpload =e =>{
    const file = e[0];

    if (!file) return;

    if (file.size >= MAX_POST_IMAGE_SIZE) {
      message.error(
        `File size should be less then ${MAX_POST_IMAGE_SIZE / 1000000}MB`
      );
      return;
    }

    setImage(file);

    setIsFocused(true);
    e = null;
  }

  const handleTitleChange = e => setTitle(e.target.value);

  const handleSubmit = async (e, createPost) => {
    e.preventDefault();
    createPost();
    handleReset();
  };

  return (
    <Mutation
      mutation={CREATE_POST}
      variables={{ input: { title, image, authorId: auth.user.id, category } }}
      refetchQueries={() => [
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
      ]}
    >
      {(createPost, { loading, error: apiError }) => {
        const isShareDisabled = loading || (!loading && !image && !title);

        return (
          <>
            {isFocused && <Overlay onClick={handleReset} />}

            <Root
              zIndex={isFocused ? 'md' : 'xs'}
              color="white"
              radius="sm"
            >
              <form onSubmit={e => handleSubmit(e, createPost)}>
                <Wrapper>
                  <Avatar image={auth.user.image} size={40} />
                  <Selectcolor href="#" onClick={() => handleIconClick()}>
                    <Image src={require("../assets/images/chevron-down-gray.png")} />
                  </Selectcolor>
                  {visible &&
                    < ColorContent >
                      <ItemColor onClick={SetdefaultColor}>
                        <img style={{ width: 30 }} src={require("../assets/images/close.png")} />
                      </ItemColor>
                      <PurpleItemColor onClick={SetPurpleColor}>
                      </PurpleItemColor>
                      <BuleItemColor onClick={SetBlueColor}>
                      </BuleItemColor>
                      <GreenItemColor onClick={SetGreenColor}>
                      </GreenItemColor>
                      <YellowContent onClick={SetYellowColor}>
                      </YellowContent>
                      <BarlblueContent onClick={SetBarblueColor}>
                      </BarlblueContent >
                      <RedContent onClick={SetRedColor}>
                      </RedContent>
                    </ColorContent>
                  }
                  <Textarea
                    style={{backgroundColor:Createcolor}}
                    type="textarea"
                    name="title"
                    focus={isFocused}
                    value={title}
                    onFocus={handleOnFocus}
                    onChange={handleTitleChange}
                    placeholder="What's on your mind?"
                  />

                  {isvisibleUploadImage &&
                    <UploadFilePopup uploadimage={handlePostImageUpload} Drogimage ={drogImageUpload} closeuploadimage={closeuploadimage} data={image} />
                  }
                  <PostImageUpload handleChange={isuploadImage}/>
                </Wrapper>

                {image && !isvisibleUploadImage&& (
                  <Spacing bottom="sm">
                    <ImagePreviewContainer>
                      <ImagePreview src={URL.createObjectURL(image)} />
                    </ImagePreviewContainer>
                  </Spacing>
                )}
                {isFocused && (
                  <Options>
                    <div></div>

                    <Buttons>
                      <Button text type="button" onClick={handleReset}>
                        Cancel
                      </Button>
                      <Button disabled={isShareDisabled} type="submit">
                        Share
                    </Button>
                    </Buttons>
                  </Options>
                )}

                {apiError ||
                  (error && (
                    <Spacing top="xs" bottom="sm">
                      <Error size="xs">
                        {apiError
                          ? 'Something went wrong, please try again.'
                          : error}
                      </Error>
                    </Spacing>
                  ))}
              </form>
            </Root>
          </>
        );
      }}
    </Mutation >
  );
};

export default CreatePost;
