import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {NotificationsDropdown} from 'components/NotificationsDropdown'

const Root = styled.div`
  text-align: center;
  position: absolute;
  background-color: white;
  line-height: ${p => p.theme.spacing.md};
  right: -23px;
  top: 60px;
  z-index: ${p => p.theme.zIndex.xl};
  box-shadow: ${p => p.theme.shadows.sm};
  border-radius: 15px;
`


const Space = styled.div`
  margin-top : 20px;
`

const Empty = styled.div`
  padding: ${p => p.theme.spacing.xs};
`;

const ItemList= styled.div`
  transition: background-color 0.1s;
  display: flex;
  padding: 2px 0px;
  cursor: pointer;
  padding-top:8px;
  flex : row;
  margin-left: 20px;
  margin-right: 20px;
`

const Text = styled.p`
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 0px;
`

/**
 * Component that renders Header Notification's dropdown
 */
const HeaderNotificationDropDown = ({
  notificationRef,
}) => {
  return (
    <Root ref={notificationRef}>
      <NotificationsDropdown />
    </Root>
  );
};

HeaderNotificationDropDown.propTypes = {
  notificationRef: PropTypes.object,
  dropdownData: PropTypes.array,
  closeDropDown: PropTypes.func,
};

export default HeaderNotificationDropDown;
