import React from 'react';
import styled, { css } from 'styled-components';
import { generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';

import SignOut from 'components/App/SignOut';
import { A } from 'components/Text';

import * as Routes from 'routes';
import SettingIcon from 'components/settingIcon';
import PluginIcon from 'components/PluginIcons';
import {
  PrivacyIcon,
  HelpsIcon,
  NotificationsIcon,
  PluginsIcon,
  LeftArrowIcon,
  AllsideIcon,
  BirthdaynotiIcon,
  ChatnotiIcon,
  ShareNetworkIcon
}
  from 'components/icons';


import { useStore } from 'store';

const Root = styled.div`
  text-align: center;
  position: absolute;
  background-color: white;
  line-height: ${p => p.theme.spacing.md};
  right: -18px;
  top: 60px;
  z-index: ${p => p.theme.zIndex.xl};
  box-shadow: ${p => p.theme.shadows.sm};
  border-radius: 15px;
  width: 260px;

  :before {
    content: "";
    position: absolute;
    top: -12px;
    right: 2px;
    border: 8px solid var(--bg-inverse);
    border-color: transparent transparent var(--bg-inverse) var(--bg-inverse);
    -webkit-transform: translateX(-50%) rotate(135deg);
    -ms-transform: translateX(-50%) rotate(135deg);
    -webkit-transform: translateX(-50%) rotate(135deg);
    -ms-transform: translateX(-50%) rotate(135deg);
    transform: translateX(-50%) rotate(135deg);
    box-shadow: -2px 2px 3px rgba(57,73,76,.1);
    width: 20px;
    height: 30px;
    color: white;
    background-color: white;
  }
`;

const PulginRoot = styled.div`
text-align: center;
position: absolute;
background-color: white;
line-height: ${p => p.theme.spacing.md};
right: -18px;
top: 60px;
z-index: ${p => p.theme.zIndex.xl};
box-shadow: ${p => p.theme.shadows.sm};
border-radius: 15px;
width:320px;

:before {
  content: "";
  position: absolute;
  top: -12px;
  right: 2px;
  border: 8px solid var(--bg-inverse);
  border-color: transparent transparent var(--bg-inverse) var(--bg-inverse);
  -webkit-transform: translateX(-50%) rotate(135deg);
  -ms-transform: translateX(-50%) rotate(135deg);
  -webkit-transform: translateX(-50%) rotate(135deg);
  -ms-transform: translateX(-50%) rotate(135deg);
  transform: translateX(-50%) rotate(135deg);
  box-shadow: -2px 2px 3px rgba(57,73,76,.1);
  width: 20px;
  height: 30px;
  color: white;
  background-color: white;
}
`;

const CSS = css`
  transition: background-color 0.1s;
  display: flex;
  padding: 2px 0px;

`;

const Space = styled.div`
  margin-top : 30px;
`

const SmallSpace = styled.div`
margin-top : 10px;
`

const Link = styled(A)`
  padding-top: 30px;
  flex : row;
  margin-left: 20px;
  ${CSS};
`;

const ItemList = styled.div`
  cursor: pointer;
  padding-top: 30px;
  flex : row;
  margin-left: 20px;
  margin-right: 20px;
  ${CSS};
`

const NotificationTitle = styled.div`
  cursor: pointer;
  padding-top: 30px;
  flex : row;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: solid 1px;
  ${CSS};
`
const Item = styled.div`
  ${CSS};
  flex : row;
  padding-top: 10px;
  margin-left: 20px;
  margin-top: 10px;
  border-top: ridge;
`;

const NotiTiltle = styled.p`
  margin-top: 3px;
  width: 230px;
  font-weight: bold;
  font-size: 18px;
`

const Empty = styled.div`
  padding: ${p => p.theme.spacing.xs};
`;

/**
 * Component that renders Header User's dropdown
 */
const HeaderUserDropDown = ({ dropdownData, closeDropDown }) => {
  const [{ auth }] = useStore();
  const [isvisible, showContent] = React.useState("usersetting");
  const UserSetting = () => {
    showContent('usersetting')
  }
  const Notification = () => {
    showContent('notification')
  }

  const Plugin = () => {
    showContent('plugin')
  }

  if (isvisible == "usersetting") {
    return (
      <Root>
        <Space></Space>
        <Link
          to={generatePath(Routes.USER_PROFILE, {
            username: auth.user.username,
          })}
        >
          <PrivacyIcon />
          <SettingIcon text="Setting & Privacy" />
        </Link>
        <Link
          to={generatePath(Routes.USER_PROFILE, {
            username: auth.user.username,
          })}
        >
          <HelpsIcon />
          <SettingIcon text="Help & Support" />
        </Link>

        <ItemList onClick={Notification}>
          <NotificationsIcon />
          <SettingIcon text="Notifications" />
        </ItemList>

        <ItemList onClick={Plugin}>
          <PluginsIcon />
          <SettingIcon text="Plugins" />
        </ItemList>
        <Item>
          <SignOut />
        </Item>
      </Root>
    );
  }
  if (isvisible == "notification") {
    return (
      <Root>
        <Space></Space>
        <NotificationTitle onClick={UserSetting}>
          <LeftArrowIcon />
          <NotiTiltle>Notifications</NotiTiltle>
        </NotificationTitle>
        {!dropdownData.length ? (
          <Empty>No new notifications.</Empty>
        ) : (
            dropdownData.map(notification => (
              <Notification
                key={notification.id}
                notification={notification}
                close={closeDropDown}
              />
            ))
          )}
      </Root>
    );
  }
  if (isvisible == "plugin") {
    return (
      <PulginRoot>
        <Space></Space>
        <NotificationTitle onClick={UserSetting}>
          <LeftArrowIcon />
          <NotiTiltle>Plugins</NotiTiltle>
        </NotificationTitle>
        <SmallSpace></SmallSpace>
        <ItemList>
          <AllsideIcon />
          <PluginIcon text="AllSides media biasa" />
        </ItemList>
        <ItemList>
          <BirthdaynotiIcon />
          <PluginIcon text="Birthday notification" />
        </ItemList>
        <ItemList>
          <ChatnotiIcon />
          <PluginIcon text="Chat" />
        </ItemList>
        <ItemList>
          <ShareNetworkIcon />
          <PluginIcon text="Share to external networks" />
        </ItemList>

      </PulginRoot>
    );
  }
};

HeaderUserDropDown.propTypes = {
  userRef: PropTypes.object,
};

export default HeaderUserDropDown;
