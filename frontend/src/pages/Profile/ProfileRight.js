import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonOutline } from './ButtonOutline';


const Root = styled.div`
    width: 330px;
    float: right;
    margin-top: 30px;
    margin-right: 50px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 15px;   
        margin-right: 0px; 
    }
`
const InterestIng = styled.div`
    width: 315px;
    height: auto;
    padding-left: 25px;
    padding-top: 5px;
    padding-bottom: 20px;
    background-color: white;
    border-radius: 24px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 15px;    
        padding-bottom: 20px;
    }
`
const TitelSection = styled.div`

`
const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-right: 8px;
    margin-bottom: 0px;
`
const Edit = styled.a`
    background-color: transparent;
    border: none;
    font-size: 12px;
    padding-top: 24px;
    color: #009DE8;
    z-index: 0;

`

const ItemList = styled.div`

`
const Item = styled.p`
    color: #009DE8;
    height: 12px;
    font-family : Roboto-Medium;
    font-size: 14px;
`

const TitleSection = styled.div`
    display: flex;
`

const Openfor = styled.div`
    margin-top: 20px;
    height: 130px;
    width: 315px;
    background-color: white;
    border-radius: 23px;
    padding: 5px 20px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 5px 15px; 
    }
`

const ImageItem = styled.div`
    display: flex;
    justify-content: start;
    margin-top: 10px;
`

const Image = styled.img`
    width: 44px;
    height: 44px;
    margin: 5px;
`
const Biography = styled.div`
    margin-top: 20px;
    width: 315px;
    background-color: white;
    border-radius: 23px;
    padding: 5px 20px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 5px 15px;    
    }
`

const TextContent = styled.p`
    font-size: 14px;
`
const ReminderSection = styled.div`
    padding: 5px 20px;
    margin-top: 20px;
    display: block;
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
`

const RightBotton = styled.div`
    display:none;
    @media(max-width: 768px){
        display: block;
    }
`

const ProfileRight = ({ modal,EditProfile,interests }) => {
    return (
        <Root>
            <InterestIng>
                <TitleSection>
                    <Title>Interest.</Title>
                    <Edit href="#" onClick={modal}>Edit</Edit>
                </TitleSection>
                <ItemList>
                    {
                        interests.map((interest, index) => {
                            return (
                                <Item key={index} >{interest}</Item>
                            )
                        })
                    }
                </ItemList>
            </InterestIng>
            <Openfor>
                <Title style={{ marginLeft: 5 }}>Open for</Title>
                <ImageItem>
                    <Image src={require("../../assets/images/tea.png")} />
                    <Image src={require("../../assets/images/cup.png")} />
                    <Image src={require("../../assets/images/chair.png")} />
                </ImageItem>
            </Openfor>
            <Biography>
                <TitleSection>
                    <Title>Biography.</Title>
                    <Edit href="#">Edit</Edit>
                </TitleSection>
                <TextContent>
                    When Miles Davis visited the UK in the autumn of 1960,
                    there was no big fanfare about his recently released album Kind of Blue.
                    The trumpeter played now-lost venues such as the Gaumont
                    Palace cinemas in Kilburn and Lewisham,
                    London – starting and ending his sets with songs from the
                    album – and at the time, he told a friend of my father’s,
                    a promoter called Jim Ireland who was looking after parts of his tour,
                    that he expected to make little money from Kind of Blue.
                </TextContent>
            </Biography>
            <ReminderSection>
                <TitleSection>
                    <Title>Biography.</Title>
                </TitleSection>
                <BrithdayContent>
                    <Image src={require("../../assets/images/brithday.png")} />
                    <BirthdayTitle>N. Eddie, C. Cole, F. Jean, L. Anne, N. Harry, M. Amelia have a birthdays today.</BirthdayTitle>
                </BrithdayContent>
            </ReminderSection>
            <RightBotton>
                <ButtonOutline
                    title='Edit Profile'
                    EditProfile={EditProfile}
                />
            </RightBotton>
        </Root>
    );
}

ProfileRight.propTypes = {
    modal: PropTypes.func.isRequired,
};
export default ProfileRight