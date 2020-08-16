import React, { useState, useEffect, Fragment, useRef } from 'react';
import styled from 'styled-components';
import { generatePath } from 'react-router-dom';
import { Query } from 'react-apollo';

import theme from '../../theme'
import { A } from 'components/Text';
import PostPopup from 'components/PostPopup';
import Modal from 'components/Modal';
import PostCard from 'components/PostCard';
import { Spacing, Container, DesktopContainer } from 'components/Layout';
import { Loading } from 'components/Loading';
import InfiniteScroll from 'components/InfiniteScroll';
import Skeleton from 'components/Skeleton';
import CreatePost from 'components/CreatePost';
import Head from 'components/Head';
import Header from 'components/App/Header';
import SideBar from '../../components/App/SideBar';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useClickOutside } from '../../hooks/useClickOutside';
import { GripeZonePopup } from '../../components/GripeZonePopup'

import { GET_FOLLOWED_POSTS } from 'graphql/post';

import { useStore } from 'store';

import { HOME_PAGE_POSTS_LIMIT } from 'constants/DataLimit';

import * as Routes from 'routes';

const Empty = styled.div`
  padding: ${p => p.theme.spacing.sm};
  border: 1px solid ${p => p.theme.colors.border.main};
  border-radius: ${p => p.theme.radius.sm};
  margin-top: ${p => p.theme.spacing.lg};
  background-color: ${p => p.theme.colors.white};
`;

const StyledA = styled(A)`
  text-decoration: underline;
  font-weight: ${p => p.theme.font.weight.bold};
`;

const MobileGripezone = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

/**
 * Home page of the app
 */
const Home = () => {
  const [{ auth }] = useStore();
  const windowSize = useWindowSize();
  const [modalPostId, setModalPostId] = useState(null);
  const isDesktop = windowSize.width >= parseInt(theme.screen.md, 10);
  const [isSideBarOpen, setIsSidebarOpen] = useState(isDesktop);
  const [isvisible, SetVenting] = useState(false)
  const sideBarRef = useRef('');
  const [groupfield, SetGroupfield] = useState("mainfeed")
  useClickOutside(sideBarRef, () => {
    if (!isDesktop && isSideBarOpen) {
      setIsSidebarOpen(false);
    }
  });

  useEffect(() => {
    setIsSidebarOpen(isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    return () => {
      if (!isDesktop) {
        setIsSidebarOpen(false);
      }
    };
  }, [isDesktop]);

  const Setmainfeed = () => {
    SetGroupfield("mainfeed");
  }
  const administration = () => {
    SetGroupfield("administration");
  }
  const record = () => {
    SetGroupfield("record");
  }
  const announcements = () => {
    SetGroupfield("announcements");
  }
  const astronomy = () => {
    SetGroupfield("astronomy");
  }
  const climate = () => {
    SetGroupfield("climate");
  }
  const medicine = () => {
    SetGroupfield("medicine");
  }
  const music = () => {
    SetGroupfield("music");
  }
  const vikings = () => {
    SetGroupfield("vikings");
  }
  const closeModal = () => {
    window.history.pushState('', '', '/');
    setModalPostId(null);
  };

  const openModal = postId => {
    window.history.pushState('', '', generatePath(Routes.POST, { id: postId }));
    setModalPostId(postId);
  };

  const variables = {
    userId: auth.user.id,
    skip: 0,
    limit: HOME_PAGE_POSTS_LIMIT,
  };

  const visibleventing = () => {
    SetVenting(true)
  }

  const closevetingmodal = () => {
    SetVenting(false)
  }
  return (
    <>
      {!isDesktop &&
        <Header toggleSideBar={() => setIsSidebarOpen(!isSideBarOpen)} />
      }
      <SideBar
        isOpen={isSideBarOpen}
        sideBarRef={sideBarRef}
        modal={visibleventing}
        mainfeed={Setmainfeed}
        administration={administration}
        record={record}
        announcements={announcements}
        astronomy={astronomy}
        climate={climate}
        medicine={medicine}
        music={music}
        vikings={vikings}
      />
      {isvisible &&
        <MobileGripezone>
          <GripeZonePopup closeVenting={closevetingmodal} />
        </MobileGripezone>
      }
      {!isSideBarOpen ?
        <Container maxWidth="md">
          <Head />
          <Spacing top="lg" />

          <CreatePost feed={groupfield} />

          <Query
            query={GET_FOLLOWED_POSTS}
            variables={variables}
            notifyOnNetworkStatusChange
          >
            {({ data, loading, fetchMore, networkStatus }) => {
              if (loading && networkStatus === 1) {
                return (
                  <Skeleton
                    height={500}
                    bottom="lg"
                    top="lg"
                    count={HOME_PAGE_POSTS_LIMIT}
                  />
                );
              }

              const { posts, count } = data.getFollowedPosts;
              const post = posts.filter(function (data) {
                return data.category === groupfield
              });
              if (!posts.length) {
                return (
                  <Empty>
                    <StyledA to={generatePath(Routes.EXPLORE)}>
                      Explore new posts
                </StyledA>{' '}
                or{' '}
                    <StyledA to={generatePath(Routes.PEOPLE)}>
                      Find new people
                </StyledA>
                  </Empty>
                );
              }

              return (
                <InfiniteScroll
                  data={post}
                  dataKey="getFollowedPosts.posts"
                  count={parseInt(count)}
                  variables={variables}
                  fetchMore={fetchMore}
                >
                  {data => {
                    const showNextLoading =
                      loading && networkStatus === 3 && count !== data.length;
                    console.log("poddddst", post.category);
                    return (
                      <Fragment>
                        {data.slice(0, 3).map(post => (
                          <Fragment key={post.id}>
                            <Modal
                              open={modalPostId === post.id}
                              onClose={closeModal}
                            >
                              <PostPopup id={post.id} closeModal={closeModal} />
                            </Modal>
                            <Spacing bottom="xs" top="xs">
                              
                              <PostCard
                                author={post.author}
                                imagePublicId={post.imagePublicId}
                                postId={post.id}
                                category ={post.category}
                                comments={post.comments}
                                createdAt={post.createdAt}
                                title={post.title}
                                image={post.image}
                                likes={post.likes}
                                openModal={() => openModal(post.id)}
                              />
                            </Spacing>
                          </Fragment>
                        ))}

                        {showNextLoading && <Loading top="lg" />}
                      </Fragment>
                    );
                  }}
                </InfiniteScroll>
              );
            }}
          </Query>
        </Container> :
        <DesktopContainer maxWidth="md">
          <Head />
          <Spacing top="lg" />
          {isvisible &&
            <GripeZonePopup closeVenting={closevetingmodal} />
          }
          <CreatePost feed={groupfield} />

          <Query
            query={GET_FOLLOWED_POSTS}
            variables={variables}
            notifyOnNetworkStatusChange
          >
            {({ data, loading, fetchMore, networkStatus }) => {
              if (loading && networkStatus === 1) {
                return (
                  <Skeleton
                    height={500}
                    bottom="lg"
                    top="lg"
                    count={HOME_PAGE_POSTS_LIMIT}
                  />
                );
              }

              const { posts, count } = data.getFollowedPosts;
              const post = posts.filter(function (data) {
                return data.category === groupfield
              });
              if (!posts.length) {
                return (
                  <Empty>
                    <StyledA to={generatePath(Routes.EXPLORE)}>
                      Explore new posts
              </StyledA>{' '}
              or{' '}
                    <StyledA to={generatePath(Routes.PEOPLE)}>
                      Find new people
              </StyledA>
                  </Empty>
                );
              }

              return (
                <InfiniteScroll
                  data={post}
                  dataKey="getFollowedPosts.posts"
                  count={parseInt(count)}
                  variables={variables}
                  fetchMore={fetchMore}
                >
                  {data => {
                    const showNextLoading =
                      loading && networkStatus === 3 && count !== data.length;
                    console.log("post", post);
                    return (
                      <Fragment>
                        {data.slice(0, 3).map(post => (
                          <Fragment key={post.id}>
                            <Modal
                              open={modalPostId === post.id}
                              onClose={closeModal}
                            >
                              <PostPopup id={post.id} closeModal={closeModal} />
                            </Modal>
                            <Spacing bottom="xs" top="xs">
                              <PostCard
                                author={post.author}
                                imagePublicId={post.imagePublicId}
                                postId={post.id}
                                comments={post.comments}
                                category = {post.category}
                                createdAt={post.createdAt}
                                title={post.title}
                                image={post.image}
                                likes={post.likes}
                                openModal={() => openModal(post.id)}
                              />
                            </Spacing>
                          </Fragment>
                        ))}

                        {showNextLoading && <Loading top="lg" />}
                      </Fragment>
                    );
                  }}
                </InfiniteScroll>
              );
            }}
          </Query>
        </DesktopContainer>
      }
    </>
  );
};

export default Home;
