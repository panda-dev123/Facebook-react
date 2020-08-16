import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import {
  Container, Icon, LabelText, RowContainer,
} from './styles'

import { A } from 'components/Text';
import { Error } from 'components/Text';
import { InputText } from 'components/Form';
import { Button } from 'components/Button'
import AuthRight from 'components/AuthRight'
import MoblieHeader from 'components/mobileheader'
import { SIGN_IN } from 'graphql/user';
import { LightTheme } from 'constants/themes'
import * as Routes from 'routes';

const Root = styled.div`
display: flex;
flex-direction:column;
margin-top: 30px;
justify-content: center;
align-items: center;

@media (min-width:768px) {
  justify-content: space-between;
  margin-top: 120px;
  align-items: self-end;;
}
`;


const ErrorMessage = styled.div`
  position: absolute;
  top: 1px;
`;

const ForgotPassword = styled.div`
  font-size: 16px;
  margin-top: ${p => p.theme.spacing.xxs};
  color: #C7CCD3;
  margin-left: 30%;
  margin-top:30px;
  @media (min-width: 768px) {
    margin-top:0px;
    margin-left: 0px;
  }
`;

const Welcome = styled.p`
  font-size: 12px;
  line-height: 14px;
  align: left;
  font-family: Roboto-Regular;
  text-align : center;

  @media (min-width: 768px) {
    text-align : left;
  }
`;


const Title = styled.p`
  font-size: 26px;
  line-height: 30px;
  align: left;
  letter: 0.22px;
  font-family: Roboto-Regular;
  font-weight: bold;
  text-align : center;

   @media (min-width: 768px) {
    text-align : left;
  }

`;
const LoginContainer = styled.div`
  position: relevent;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
    float:left;
  }
`


const MainContainer = styled.div`
  @media (min-width: 768px) {
    width: 350px;
    margin:auto;
  } 
`
const RigisterButton = styled.div`
  margin-top: 160px;
  @media (min-width: 768px) {
    margin-top :0px;
  } 
 
`

const RememberForget = styled.div`
  display: flex;
  flex-direction:row;
  margin-top: 40px;
`

const Remember = styled.div`
  display: flex;
  flex-direction:row;
  margin-top:50px;
  margin-left: 30%;
  @media (min-width: 768px) {
    margin-left: 20px;
    margin-right: 60px;
    margin-top: 0px;
  } 
`
const AuthButton = styled.div`
  display: flex;
  flex-direction:row;
  margin-top: 40px;
  justify-content: space-between;
`

const MobileAuth = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 330px;
  } 
`

const DesktopAuth = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  } 
`

/**
 * Sign In page
 */
const SignIn = ({ history, location, refetch }) => {
  const [values, setValues] = useState({ emailOrUsername: '', password: '' });
  const [error, setError] = useState('');
  const [visiblepass, setvisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    setError('');
  }, [location.pathname]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  const handleSubmit = (e, signin) => {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      setError('All fields are required');
      return;
    }

    setError('');
    signin().then(async ({ data }) => {
      localStorage.setItem('token', data.signin.token);
      await refetch();
      history.push(Routes.HOME);
    });
  };

  const handleRevealPassword = () => {
    setvisible(!visiblepass);
  }

  const onChangeCheckbox = () => {
    setChecked(!isChecked)
  }

  const renderErrors = apiError => {
    let errorMessage;

    if (error) {
      errorMessage = error;
    } else if (apiError) {
      errorMessage = apiError.graphQLErrors[0].message;
    }

    if (errorMessage) {
      return (
        <ErrorMessage>
          <Error size="xxs" color="white">
            {errorMessage}
          </Error>
        </ErrorMessage>
      );
    }

    return null;
  };

  const { emailOrUsername, password } = values;
  return (
    <Mutation
      mutation={SIGN_IN}
      variables={{ input: { emailOrUsername, password } }}
    >
      {(signin, { loading, error: apiError }) => (
        <form onSubmit={e => handleSubmit(e, signin)}>
          <MoblieHeader />
          <Root>
            <LoginContainer>
              <MainContainer>
                <Welcome>WELCOME TO FELLOWS OS</Welcome>
                <Title>Login your account</Title>
                <Container>
                  <LabelText>E-Mail</LabelText>
                  <RowContainer>
                    <Icon
                      src={LightTheme.images.emailIcon}
                      width={20}
                      height={16}
                    />
                    {renderErrors(apiError)}
                    <InputText
                      style={{ border: "none", backgroundColor:"transparent" }}
                      autoFocus
                      type="text"
                      name="emailOrUsername"
                      values={emailOrUsername}
                      onChange={handleChange}
                      placeholder="Your E-Mail"
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
                        style={{ border: "none", backgroundColor:"transparent" }}
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
                  <DesktopAuth>
                    <AuthButton>
                      <a href={Routes.SIGNUP}>
                        <RigisterButton>
                          <Button
                            type="submit"
                            title='Register'
                            outline
                          />
                        </RigisterButton>
                      </a>
                      <Button
                        onClick={e => handleSubmit(e, signin)}
                        title='Login'
                      />
                    </AuthButton>
                    <RememberForget>
                      <Remember>
                        <input  type="checkbox" checked={isChecked} name="lsRememberMe" onChange={onChangeCheckbox} className="rememberme" />
                        <label style={{ paddingLeft: 5, marginTop: "-2px" }}>Remember me</label>
                      </Remember>
                      <A to={Routes.FORGOT_PASSWORD}>
                        <ForgotPassword>Forgot password?</ForgotPassword>
                      </A>
                    </RememberForget>
                  </DesktopAuth> 
                  <MobileAuth>
                    <Button
                      onClick={e => handleSubmit(e, signin)}
                      title='Login'
                    />
                    <Remember>
                      <input type="checkbox" checked={isChecked} name="lsRememberMe" onChange={onChangeCheckbox} className="rememberme" />
                      <label style={{ paddingLeft: 5,marginTop: "-2px" }}>Remember me</label>
                    </Remember>
                    <A to={Routes.FORGOT_PASSWORD}>
                      <ForgotPassword>Forgot password?</ForgotPassword>
                    </A>
                    <A to={Routes.SIGNUP}>
                      <RigisterButton>
                        <Button
                          type="submit"
                          title='Register'
                          outline
                        />
                      </RigisterButton>
                    </A>
                  </MobileAuth>

              </MainContainer>
            </LoginContainer>
              <AuthRight />
          </Root>
        </form>
      )}

    </Mutation>
  );
};

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default withRouter(SignIn);
