import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import {
  Container, Icon, LabelText, RowContainer,
} from './styles'

import { Button } from 'components/Button'
import { A } from 'components/Text';
import { Spacing } from 'components/Layout';
import { H1, Error } from 'components/Text';
import MoblieHeader from 'components/mobileheader'
import { InputText } from 'components/Form';
import Head from 'components/Head';
import AuthRight from 'components/AuthRight'
import { LightTheme } from 'constants/themes'

import { SIGN_UP } from 'graphql/user';

import * as Routes from 'routes';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  @media (min-width: ${p => p.theme.screen.sm}) {
    justify-content: space-between;
    margin-top: 120px;
    width: 50%;
  }
`;

const Welcome = styled.div`
  display: none;
  flex-direction: column;
  color: ${p => p.theme.colors.white};
  max-width: ${p => p.theme.screen.xs};

  @media (min-width: ${p => p.theme.screen.sm}) {
    display: flex;
  }
`;

const Heading = styled(H1)`
  margin-bottom: ${p => p.theme.spacing.sm};
`;

const Form = styled.div`
  padding: ${p => p.theme.spacing.sm};
  border-radius: ${p => p.theme.radius.sm};
  width: 100%;

  @media (min-width: ${p => p.theme.screen.sm}) {
    width: 450px;
    margin:auto
  }
`;

const AuthButton = styled.div`
  display: flex;
  flex-direction:row;
  margin-top: 40px;
  width: 350px;
  justify-content: space-between;
  margin: auto;
  @media (max-width: ${p => p.theme.screen.sm}) { 
    display: block;
  }
`
const RigisterButton = styled.div`
  margin-top: 0px;
  @media (min-width: ${p => p.theme.screen.sm}) {
    margin-right: 35px;
    margin-top :0px;

  } 
 
`

const Title = styled.p`
  font-size: 26px;
  line-height: 30px;
  align: left;
  letter: 0.22px;
  font-family: Roboto-Regular;
  font-weight: bold;
  text-align : center;

   @media (min-width: ${p => p.theme.screen.sm}) {
    text-align : left;
  }

`;


/**
 * Sign Up page
 */
const SignUp = ({ history, refetch }) => {
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  const [visiblepass, setvisible] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    if (!fullName || !email || !username || !password) {
      return 'All fields are required';
    }

    if (fullName.length > 50) {
      return 'Full name no more than 50 characters';
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(email).toLowerCase())) {
      return 'Enter a valid email address.';
    }

    const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
    if (!usernameRegex.test(username)) {
      return 'Usernames can only use letters, numbers, underscores and periods';
    } else if (username.length > 20) {
      return 'Username no more than 50 characters';
    }

    if (password.length < 6) {
      return 'Password min 6 characters';
    }

    return false;
  };

  const handleRevealPassword = () => {
    setvisible(!visiblepass);
  }

  const handleSubmit = (e, signup) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setError(error);
      return false;
    }

    signup().then(async ({ data }) => {
      localStorage.setItem('token', data.signup.token);
      await refetch();
      history.push(Routes.HOME);
    });
  };

  const renderErrors = apiError => {
    let errorMessage;

    if (error) {
      errorMessage = error;
    } else if (apiError) {
      errorMessage = apiError.graphQLErrors[0].message;
    }

    if (errorMessage) {
      return (
        <Spacing left="md" bottom="sm" top="sm">
          <Error>{errorMessage}</Error>
        </Spacing>
      );
    }

    return null;
  };

  const { fullName, email, password, username } = values;

  return (
    <Mutation
      mutation={SIGN_UP}
      variables={{ input: { fullName, email, password, username } }}
    >
      {(signup, { loading, error: apiError }) => {
        return (
          <>
            {!isDesktop &&
              <MoblieHeader />
            }
            <Root maxWidth="lg">
              <Head />
              <Form>
                <Spacing bottom="md">
                  <Title>Create Account</Title>
                </Spacing>

                <form onSubmit={e => handleSubmit(e, signup)}>
                  <Container>
                    <LabelText>Full Name</LabelText>
                    <RowContainer>
                      <Icon
                        src={LightTheme.images.userIcon}
                        width={20}
                        height={16}
                      />
                      <InputText
                        type="text"
                        name="fullName"
                        style={{ border: "none", backgroundColor:"transparent" }}
                        values={fullName}
                        onChange={handleChange}
                        placeholder="Full name"
                        borderColor="white"
                      />
                    </RowContainer>
                  </Container>
                  <Container>
                    <LabelText>E-Mail</LabelText>
                    <RowContainer>
                      <Icon
                        src={LightTheme.images.emailIcon}
                        width={20}
                        height={16}
                      />
                      <InputText
                        type="text"
                        name="email"
                        style={{  border: "none", backgroundColor:"transparent" }}
                        values={email}
                        onChange={handleChange}
                        placeholder="Email"
                        borderColor="white"
                      />
                    </RowContainer>
                  </Container>
                  <Container>
                    <LabelText>Username</LabelText>
                    <RowContainer>
                      <Icon
                        src={LightTheme.images.userIcon}
                        width={20}
                        height={16}
                      />
                      <InputText
                        type="text"
                        name="username"
                        style={{  border: "none", backgroundColor:"transparent" }}
                        values={username}
                        onChange={handleChange}
                        placeholder="Username"
                        borderColor="white"
                      />
                    </RowContainer>
                  </Container>
                  <Container>
                    <LabelText>Password</LabelText>
                    <RowContainer>
                      <Icon
                        src={LightTheme.images.keyIcon}
                        width={22}
                        height={12}
                      />
                      {!visiblepass ? <InputText
                        type="password"
                        name="password"
                        style={{  border: "none", backgroundColor:"transparent" }}
                        values={password}
                        onChange={handleChange}
                        placeholder="Your Password"
                        borderColor="white"
                      /> :
                        <InputText
                          type="text"
                          name="password"
                          style={{  border: "none", backgroundColor:"transparent" }}
                          values={password}
                          onChange={handleChange}
                          placeholder="Your Password"
                          borderColor="white"
                        />
                      }
                      <Icon
                        style={{
                          marginRight: 13.75,
                          cursor: 'pointer'
                        }}
                        onClick={handleRevealPassword}
                        src={LightTheme.images.eyeIcon}
                        width={16.5}
                        height={11.25}
                      />
                    </RowContainer>
                  </Container>

                  {renderErrors(apiError)}

                  <Spacing top="sm" />
                  <AuthButton>
                    <RigisterButton>
                      <Button
                        type="submit"
                        title='Register'
                        onClick={e => handleSubmit(e, signup)}
                        outline
                      />
                    </RigisterButton>
                    <A to={Routes.HOME}>
                      <Button
                        title='Login'
                      />
                    </A>
                  </AuthButton>
                </form>
              </Form>
              {isDesktop &&
                <AuthRight />
              }
            </Root>
          </>
        );
      }}
    </Mutation >
  );
};

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default withRouter(SignUp);
