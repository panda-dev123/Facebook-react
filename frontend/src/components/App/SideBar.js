import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Spacing } from 'components/Layout';
import Navigation from './Navigation';

import {
  SIDEBAR_DESKTOP_WIDTH,
  SIDEBAR_MOBILE_WIDTH,
  HEADER_HEIGHT,
} from 'constants/Layout';

import { useStore } from 'store';

import * as Routes from 'routes';

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: margin-left 0.2s ease-in-out;
  font-size: ${p => p.theme.font.size.xxs};
  z-index: ${p => p.theme.zIndex.sm};
  background-color: ${p => p.theme.colors.white};
  border-right: 1px solid ${p => p.theme.colors.border.main};

  @media (min-width: ${p => p.theme.screen.md}) {
    padding-top: 0;
    position: sticky;
    top: 100px;
    margin-left: ${p => (p.isOpen ? 0 : `-${SIDEBAR_DESKTOP_WIDTH}px`)};
    flex-basis:350px;
    flex-grow: 0;
    flex-shrink: 0;
    border: 0;
    background-color: #F2F3F5;
  }

  @media (max-width: ${p => p.theme.screen.md}) {
    margin-left: ${p => (p.isOpen ? 0 : `-100%`)};
  }
`;


/**
 * Displays left side bar
 */
const SideBar = ({ 
  location, 
  isOpen, 
  sideBarRef, 
  modal,
  mainfeed,
  administration,
  record,
  announcements,
  astronomy, 
  climate,
  medicine,
  music,
  vikings 
}) => {
  const [{ auth }] = useStore();
  const isAuthUsersProfilePage =
    auth.user.username === location.pathname.substring(1);
  return (
    <Root isOpen={isOpen} ref={sideBarRef}>
      <Spacing top="md" />

      <Navigation 
      venting={modal} 
      mainfeed={mainfeed}
      administration = {administration}
      record = {record}
      announcements = {announcements}
      astronomy = {astronomy}
      climate = {climate}
      medicine = {medicine}
      music = {music}
      vikings ={vikings}
      />
    </Root>
  );
};

SideBar.propTypes = {
  location: PropTypes.object.isRequired,
  modal: PropTypes.func.isRequired,
  mainfeed: PropTypes.func.isRequired,
  administration: PropTypes.func.isRequired,
  record: PropTypes.func.isRequired,
  announcements: PropTypes.func.isRequired,
  astronomy: PropTypes.func.isRequired,
  climate: PropTypes.func.isRequired,
  medicine: PropTypes.func.isRequired,
  music: PropTypes.func.isRequired,
  vikings: PropTypes.func.isRequired,
};

export default withRouter(SideBar);
