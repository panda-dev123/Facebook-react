import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import theme from '../../theme'
import Skeleton from 'components/Skeleton';
import { Container, Spacing } from 'components/Layout';
import ProfileInfo from './ProfileInfo';
import CreatePost from 'components/CreatePost';
import ProfilePosts from './ProfilePosts';
import NotFound from 'components/NotFound';
import Head from 'components/Head';
import ProfileLeft from './ProfileLeft';
import ProfileRight from './ProfileRight';
import InterestingModal from './InterestingModal';
import { useWindowSize } from '../../hooks/useWindowSize';
import { GET_USER } from 'graphql/user';
import Header from 'components/App/Header';
import EditProfile from './EditProfile';

import { useStore } from 'store';

const Root = styled.div`
  width: 100%;

  @media (min-width: ${p => p.theme.screen.lg}) {
    margin-left: 0;
    padding: 0;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: grid;
  }
`

const PostContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

/**
 * User Profile Page
 */
const Profile = ({ match }) => {
  const [{ auth }] = useStore();
  const { username } = match.params;
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width >= parseInt(theme.screen.md, 10);
  const [isModalOpen, setModalIsOpen] = React.useState(false);
  const [iseditprofile, setEditprofile] = React.useState(false);
  const [interestData, setInterestData] = React.useState([]);
  
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  const toggleProfile =() =>{
    setEditprofile(!iseditprofile)
  }

  const handleInterest = data => {
    console.log(data);
    setInterestData([...data]);
    toggleModal();
  };
  
  return (
    <>
      {isModalOpen && <InterestingModal interests={interestData} onRequestClose={toggleModal} onAddInterest = {handleInterest} />}
      <Root>
        {!isDesktop &&
          <Header />
        }

        <Query query={GET_USER} variables={{ username }}>

          {({ data, loading, error }) => {
            if (loading) {
              return (
                <Container padding="xxs">
                  <Skeleton height={350} />
                  <Container maxWidth="sm">
                    <Spacing top="lg" bottom="lg">
                      <Skeleton height={82} />
                    </Spacing>
                  </Container>
                </Container>
              );
            }

            if (error || !data.getUser) return <NotFound />;
            setInterestData(data.getUser.interesting)
            return (
              <Container padding="xxs">
                <ProfileInfo user={data.getUser} />
                {iseditprofile&&
                  <EditProfile onRequestClose={toggleProfile} user={data.getUser}/>
                }
                <ProfileContent>
                  <ProfileLeft user={data.getUser} EditProfile={toggleProfile} />
                  <Container style={{ float: 'left' }}>
                    <PostContainer>
                      <ProfilePosts username={username} />
                    </PostContainer>
                  </Container>
                  <ProfileRight modal={toggleModal} EditProfile={toggleProfile} interests={interestData} user={data.getUser}/>
                </ProfileContent>
              </Container>
            );
          }}
        </Query>
      </Root>
    </>
  );
};

Profile.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Profile);
