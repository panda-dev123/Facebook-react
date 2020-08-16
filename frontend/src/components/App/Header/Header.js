import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import theme from '../../../theme'
import { NotificationIcon, MenuIcon, EnvelopeOpenIcon, BookpageIcon, VideoIcon, ArrowdownIcon, ContractIcon } from 'components/icons';
import { Container, Spacing } from 'components/Layout';
import { A } from 'components/Text';
import { Button } from 'components/Form';
import Avatar from 'components/Avatar';
import Search from 'components/Search';
import HeaderDropDowns from './HeaderDropDowns';

import { useClickOutside } from 'hooks/useClickOutside';

import { useStore } from 'store';

import { Logo } from 'components/Logo'
import { HEADER_HEIGHT } from 'constants/Layout';

import * as Routes from 'routes';

const Root = styled(Container)`
  position: sticky;
  top: 0;
  background-image: linear-gradient(to left,#4A90E2,#9E10E0,#5046FE);
  z-index: 999;
  height: ${HEADER_HEIGHT}px;
  border-radius: 0px;
  border-bottom: 1px solid ${p => p.theme.colors.border.main};
  @media (min-width: 1440px) {
    width: 1440px;  
  }
  @media (min-width: ${p => p.theme.screen.md}) {
    z-index: 999;
  }
`;

const Wrapper = styled.div`
  display: none;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT}px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${p => p.theme.screen.md}) {
    display: flex;
  }

  @media (min-width: ${p => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
  
  }
`;

const MobileWrapper = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: ${HEADER_HEIGHT}px;
margin: 0 auto;
width: 100%;
padding: 0 20px;

@media (min-width: ${p => p.theme.screen.md}) {
  display: none;
}
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Hamburger = styled.div`
  cursor: pointer;

  @media (min-width: ${p => p.theme.screen.md}) {
    display: none;
  }
`;

const Contract = styled.div`
  cursor: pointer;
  @media (min-width: ${p => p.theme.screen.md}) {
    display: none;
  }
`

const FullName = styled.p`
  padding-left : 5px;
  padding-right : 15px;
  color : white;
  font-family: Roboto-Medium;
  font-size : 16px;
  text-transform: capitalize;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const countCSS = css`
  top: 3px;
  left: 114px;
  position: absolute;
  height: 22px;
  width: 22px;
  padding: 2px;
  letter-spacing: -1px;
  border-radius: 50%;
  color: ${p => p.theme.colors.white};
  background: linear-gradient(#5533FF, #25DDF5);
  font-size: ${p => p.theme.font.size.xxs};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NotificationCount = styled.span`
  ${countCSS};
  right: 54px;
`;

const MessageCount = styled.span`
  ${countCSS};
  right: 100px;
`;

const Image = styled.img`

`

/**
 * Header of the App when user is authenticated
 */
const Header = ({ location, toggleSideBar, togglecontact }) => {
  const [{ auth }] = useStore();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownData, setDropdownData] = useState([]);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 680);
  const messageRef = useRef(null);
  const notificationRef = useRef(null);
  const userRef = useRef(null);

  const closeOnClickOutside = () => {
    if (dropdownOpen) {
      closeDropDown();
    }
  };

  useClickOutside(messageRef, closeOnClickOutside);
  useClickOutside(notificationRef, closeOnClickOutside);
  useClickOutside(userRef, closeOnClickOutside);

  const closeDropDown = () => {
    setDropdownOpen(null);
    setDropdownData([]);
  };

  useEffect(() => {
    return () => closeDropDown();
  }, [location.pathname]);

  const handleIconClick = dropdownType => {
    if (dropdownOpen) {
      closeDropDown();
    } else {
      if (dropdownType === 'NOTIFICATION') {
        setDropdownData(auth.user.newNotifications);
      } else if (dropdownType === 'MESSAGE') {
        setDropdownData(auth.user.newConversations);
      }

      setDropdownOpen(dropdownType);
    }
  };

  return (
    <Root>
      <Wrapper>
        <LeftSide>
          <A to={Routes.HOME}>
            <Logo />
          </A>

          <Spacing left="sm" right="md">
            {/* <SearchBar placeholder="Seach fellowOS" location={location} /> */}
            <Search location={location} placeholder="Search" />
          </Spacing>
        </LeftSide>

        <RightSide>
          <Spacing right="md">
            <VideoIcon />
          </Spacing>
          <Spacing right="md">
            <BookpageIcon />
          </Spacing>
          <Spacing right="md">
            <Button ghost onClick={() => handleIconClick('MESSAGE')}>
              {auth.user.newConversations.length > 0 && (
                <MessageCount>{auth.user.newConversations.length}</MessageCount>
              )}

              <EnvelopeOpenIcon />
            </Button>
          </Spacing>

          <Spacing right="md">
            <Button ghost onClick={() => handleIconClick('NOTIFICATION')}>
              {auth.user.newNotifications.length > 0 && (
                <NotificationCount>
                  {auth.user.newNotifications.length}
                </NotificationCount>
              )}
              <NotificationIcon />
            </Button>
          </Spacing>

          <Button ghost onClick={() => handleIconClick('USER')}>
            <Avatar image={auth.user.image} />
            <FullName>{auth.user.fullName}</FullName>
            <ArrowdownIcon />
          </Button>
        </RightSide>

        <HeaderDropDowns
          messageRef={messageRef}
          notificationRef={notificationRef}
          userRef={userRef}
          dropdownOpen={dropdownOpen}
          dropdownData={dropdownData}
          closeDropDown={closeDropDown}
        />
      </Wrapper >
      <MobileWrapper>
        <LeftSide>
          <Hamburger onClick={toggleSideBar}>
            <MenuIcon />
          </Hamburger>
        </LeftSide>
        <A to={Routes.HOME} style={{ width: 100, alignItems: "center" }}>
          <Image src={require('../../../assets/images/mobilelogo.png')} />
        </A>
        <RightSide>
          <Button ghost onClick={() => handleIconClick('USER')}>
            <Avatar image={auth.user.image} />
            <Spacing right="sm"></Spacing>
            <ArrowdownIcon />
          </Button>
        </RightSide>
        <HeaderDropDowns
          messageRef={messageRef}
          notificationRef={notificationRef}
          userRef={userRef}
          dropdownOpen={dropdownOpen}
          dropdownData={dropdownData}
          closeDropDown={closeDropDown}
        />
      </MobileWrapper>
    </Root >
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  togglecontact: PropTypes.func.isRequired
};

export default withRouter(Header);
