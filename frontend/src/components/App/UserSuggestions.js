import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { matchPath } from 'react-router';
import { generatePath } from 'react-router-dom';
import { Query } from 'react-apollo';

import { LightTheme } from '../../constants/themes'
import { Loading } from 'components/Loading';
import { H3, A } from 'components/Text';
import { Spacing } from 'components/Layout';
import Avatar from 'components/Avatar';
import {
  FavoriteIcon,
  StarIcon
} from 'components/icons';


import { useStore } from 'store';

import { USER_SUGGESTIONS } from 'graphql/user';

import { USER_SUGGESTIONS_WIDTH, HEADER_HEIGHT } from 'constants/Layout';

import * as Routes from 'routes';
import ContentTitle from 'components/Title'
const theme = LightTheme

const Root = styled.div`
  display: none;
  position: sticky;
  top: ${HEADER_HEIGHT}px;
  right: 0;
  height: 100%;
  width: 350px;
  padding: ${p => p.theme.spacing.sm};
  border-radius: ${p => p.theme.radius.sm};
  min-width: 350px;

  @media (min-width: ${p => p.theme.screen.md}) {
    display: block;
  }
`;

const List = styled.ul`
  padding: 0;
  padding-left: 10px;
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-bottom: ${p => p.theme.spacing.sm};

  &:last-child {
    margin-bottom: 0;
  }
`;

const FullName = styled.div`
  color: ${p =>
    p.active ? p.theme.colors.primary.main : p.theme.colors.text.primary};
  font-size: 15px;
  line-height: 18px;
  color: #1D1F23;
  font-family: Roboto-Medium;
  margin-top: 8px;
  float : left;
`;

const Image = styled.img`
    height: 5px;
    width: 21px;
    margin-top: 30px;
    margin-right: 30px;
`

const UserName = styled.div`
  color: ${p => p.theme.colors.text.hint};
`;

const ToggleFavorite = styled.div`
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
`

const ItemList = styled.div`
    display: flex;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 39px;
  background-color: #ECEDF1;
  border-radius: 19.5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
`

export const Input = styled.input`
  flex: 1;
  outline: none;
  border-style: none;
  font-family: Roboto-Regular;
  font-size: 16px;
  background-color: transparent;
  margin-left: 12px;
`

export const MagnifierIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 15px;
`
const Searchform = styled.div`
    display: flex;
`

const ReminderSection = styled.div`
    padding: 5px 20px;
    margin-top: 20px;
`
const BrithdayContent = styled.div`
    display: flex;
    margin-top: 20px;
`
const BirthdayTitle = styled.p`
  margin-left: 10px;
  font-family: Roboto-Regular;
  font-size: 15px;
  color: #1D1F23;
`
const TitleSection = styled.div`
    display: flex;
`
const Title = styled.p`
    font-size: 16px;
    font-family: Roboto-Bold;
    margin-right: 8px;
    margin-bottom: 0px;
    color : #3E4347;
`
const BrithdayImage = styled.img`
    width: 44px;
    height: 44px;
    margin: 5px;
`
/**
 * Displays user suggestions
 */
const UserSuggestions = ({ pathname }) => {
  const [{ auth }] = useStore();

  const hideUserSuggestions = matchPath(pathname, {
    path: [Routes.MESSAGES, Routes.PEOPLE, Routes.EXPLORE, Routes.USER_PROFILE],
  });

  if (hideUserSuggestions) return null;

  return (
    <Query query={USER_SUGGESTIONS} variables={{ userId: auth.user.id }}>
      {({ data, loading }) => {
        if (loading)
          return (
            <Root>
              <Loading />
            </Root>
          );
        if (!data.suggestPeople.length > 0) {
          return null;
        }

        return (
          <Root>
            <Spacing top="lg" />
            <ContentTitle text="Favorites" />

            <List>
              {data.suggestPeople.map(user => (
                <ListItem key={user.id}>

                  <Avatar size={36} image={user.image} />

                  <Spacing left="xs">
                    <ItemList>
                      <FullName>{user.fullName}</FullName>
                      <ToggleFavorite>
                        <FavoriteIcon />
                      </ToggleFavorite>
                    </ItemList>
                  </Spacing>
                </ListItem>
              ))}
            </List>
            <Searchform>
              <InputContainer>
                <Input placeholder='Search...' />
                <MagnifierIcon src={theme.images.magnifierIconGray} />
              </InputContainer>
              <Image src={theme.images.threeDotsIcon} />
            </Searchform>
            <List>
              {data.suggestPeople.map(user => (
                <ListItem key={user.id}>
                  <Avatar size={36} image={user.image} />

                  <Spacing left="xs">
                    <ItemList>
                      <FullName>{user.fullName}</FullName>
                      <ToggleFavorite>
                        <StarIcon />
                      </ToggleFavorite>
                    </ItemList>
                  </Spacing>
                </ListItem>
              ))}
            </List>
            <ReminderSection>
                <TitleSection>
                    <Title>Biography.</Title>
                </TitleSection>
                <BrithdayContent>
                    <BrithdayImage src={require("../../assets/images/brithday.png")} />
                    <BirthdayTitle>N. Eddie, C. Cole, F. Jean, L. Anne, N. Harry, M. Amelia have a birthdays today.</BirthdayTitle>
                </BrithdayContent>
            </ReminderSection>
          </Root>
        );
      }}
    </Query>
  );
};

UserSuggestions.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default UserSuggestions;
