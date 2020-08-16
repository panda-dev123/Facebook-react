import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { Loading } from 'components/Loading';
import { USER_SUGGESTIONS } from 'graphql/user';

import Avatar from '../../components/Avatar';
import { useStore } from 'store';
import { ButtonOutline } from './ButtonOutline';
import { IconText } from 'components/IconText';
import { LightThemeImages } from '../../constants/images'

const Root = styled.div`
    width: 300px;
    min-width: 260px;
    float: left;
    margin-top: 70px;
    margin-left: 100px;
    @media(max-width: 768px){
        width: 100%;
        text-align: center;
        float: left;
        margin-left: 0px;
        margin-top: 80px;
        padding: 0 15px;
    }
`

const ProfileName = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0px;
    font-family: Roboto-Regular;
    text-transform: capitalize;
`

const AddressInfo = styled.p`
    margin-top: 3px;
    font-size: 14px;
    font-family:Roboto-Medium;
    color:#636972;
`

const UserOverview = styled.p`
    font-size: 15px;   
    font-family: Roboto-Regular;
    color :#1F2226;
`

const Moredetails = styled.div`
    margin-top: 25px;
`

const ImageText = styled.div`
    display: flex;
    text-align: left;
`

const Image = styled.img`
     width: 16px;
    height: 16px;
`

const Text = styled.p`
    margin-top: 2px;
    margin-left: 10px;
    font-size: 14px;
`

const Title = styled.p`
    margin-top: 2px;
    margin-left: 10px;
    font-size: 16px;
    color : #009DE8;
    font-weight: 800;
`

const Space = styled.div`
    margin-top: 20px;
`

const List = styled.ul`
  padding: 0;
  margin-top: 0px;
  padding-top: 0px;
  display: flex;
  justify-content: space-between;
  padding-top: ${p => p.theme.spacing.xs};
  position: relative;
  display: inline-block;
  width: 100%;
`;


const Blue = styled.span`
    color: #009DE8;
    font-weight: 400;
`

const TextContent = styled.p`
    font-size: 14px;
`
const TitleSection = styled.div`
    display: flex;
`

const ReminderSection = styled.div`
    padding: 5px 20px;
    margin-top: 20px;
    display:none;
    @media(max-width: 768px){
        display: block;
        padding: 0px;
    }
`

const LeftButton = styled.div`
    display:block;
    @media(max-width: 768px){
        display: none;
    }
`
const BrithdayContent = styled.div`
    display: flex;
    margin-top: 20px;
`
const BirthdayTitle = styled.p`
    margin-left: 20px;
    font-weight: bold;
    @media(max-width: 768px){
        margin-left: 8px;
        font-weight: bold;
        text-align: left;
    }
`

const ReminderTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-right: 8px;
    margin-bottom: 0px;
`

const ReminderImage = styled.img`
    width: 44px;
    height: 44px;
    margin: 5px;
`

const ProfileLeft = ({ user, EditProfile }) => {
    const [{ auth }] = useStore();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const datetem = Date.parse(user.birthday);
    const date = new Date(parseInt(datetem));
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const name = auth.user.fullName.split(' ');

    return (
        <Root>
            <ProfileName>{auth.user.fullName}</ProfileName>
            <AddressInfo>@{name}</AddressInfo>

            <UserOverview>
                {user.overview}
            </UserOverview>
            <Moredetails>
                {user.address !== '' &&
                    <IconText
                        iconSrc={LightThemeImages.homeIconOutline}
                        iconWidth={14}
                        iconHeight={14}
                        text={user.address}
                    />
                }
                {user.birthplace !== '' &&
                    <IconText
                        iconSrc={LightThemeImages.locationIconOutline}
                        iconWidth={14}
                        iconHeight={16}
                        text={user.birthplace}
                        label='Travelling'
                    />
                }
                {user.site !== '' &&
                    <IconText
                        iconSrc={LightThemeImages.linkIconOutline}
                        iconWidth={14}
                        iconHeight={15.32}
                        link={user.site}
                    />
                }
                {user.birthday !== '' &&
                    <IconText
                        iconSrc={LightThemeImages.childBirthIconOutline}
                        iconWidth={16}
                        iconHeight={13.09}
                        text={`Born
                    ${day}th of ${month} ${year}
                  `}
                    />
                }
            </Moredetails>
            <Space></Space>
            <Moredetails>
                {user.education !== '' &&
                    <IconText
                        iconSrc={LightThemeImages.bookPageIconOutline}
                        iconWidth={14}
                        iconHeight={14}
                        text={user.education}
                    />
                }
                {user.own !== '' &&
                    <IconText
                        iconSrc={LightThemeImages.trophyIconOultine}
                        iconWidth={14}
                        iconHeight={15}
                        text={user.own}
                    />
                }
            </Moredetails>
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
                        <>
                            <Space></Space>
                            <IconText
                                iconSrc={LightThemeImages.userProfileIconOutline}
                                iconWidth={14}
                                iconHeight={16}
                                link={`
                                ${data.suggestPeople.length} contacts
                              `}
                            />
                            <List>
                                {data.suggestPeople.map(user => (
                                    <Avatar key={user.id} image={user.image} size={50} />
                                ))}
                            </List>
                        </>
                    );
                }}
            </Query>
            <Moredetails>
                <IconText
                    iconSrc={LightThemeImages.genericImageIconOutline}
                    iconWidth={16}
                    iconHeight={16}
                    link='266 Photos and videos'
                />
            </Moredetails>
            <LeftButton>
                <ButtonOutline
                    title='Edit Profile'
                    EditProfile={EditProfile}
                />
            </LeftButton>
            <ReminderSection>
                <TitleSection>
                    <ReminderTitle>Biography.</ReminderTitle>
                </TitleSection>
                <BrithdayContent>
                    <ReminderImage src={require("../../assets/images/brithday.png")} />
                    <BirthdayTitle>N. Eddie, C. Cole, F. Jean, L. Anne, N. Harry, M. Amelia have a birthdays today.</BirthdayTitle>
                </BrithdayContent>
            </ReminderSection>
        </Root>
    );
}


ProfileLeft.propTypes = {
    user: PropTypes.object.isRequired,
    EditProfile: PropTypes.func.isRequired
};
export default ProfileLeft