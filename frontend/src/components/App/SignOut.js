import React from 'react';
import PropTypes from 'prop-types';
import { withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import { Button } from 'components/Form';
import {SignoutIcon} from 'components/icons';

import * as Routes from 'routes';

import { useStore } from 'store';
import { CLEAR_AUTH_USER } from 'store/auth';
import styled from 'styled-components';

/**
 * Component that signs out the user
 */

export const Sign_out= styled.div`
  font-size: 16px;
  font-family: Roboto-Regular;
  margin-top: 5px;
  margin-left: -10px;
  padding-bottom: 20px;
  color: rgba(0,0,0,0.54);
`
const SignOut = ({ client, history }) => {
  const [, dispatch] = useStore();

  const handleSignOut = () => {
    dispatch({ type: CLEAR_AUTH_USER });
    localStorage.removeItem('token');
    client.resetStore();
    history.push(Routes.HOME);
  };

  return (
    <>
    <SignoutIcon />
    <Button text onClick={handleSignOut}>
      <Sign_out>Sign out</Sign_out>
    </Button>
    </>
  );
};

SignOut.propTypes = {
  history: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
};

export default withRouter(withApollo(SignOut));
