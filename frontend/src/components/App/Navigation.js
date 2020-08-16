import React, { useState } from 'react';
import { NavLink, generatePath } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Routes from 'routes';
import ContentTitle from 'components/Title'
import { useStore } from 'store';
import {
  AdministratorIcon,
  AngelesIcon,
  AnnouncementsIcon,
  AstronomyIcon,
  BirthdayIcon,
  ClimateIcon,
  MainfeedIcon,
  MedicineIcon,
  MusicIcon,
  NewYorkIcon,
  PreferIcon,
  PublicIcon,
  PublicRecordIcon,
  TorontoIcon,
  VentingIcon,
  VikingsIcon,
  YaleIcon
} from 'components/icons';

const Link = styled(NavLink)`
  text-decoration: none;
  transition: color 0.1s;
  color: ${p => p.theme.colors.text.primary};
  display: block;
  padding-left: ${p => p.theme.spacing.xs};
  
`;


const VentingGripes = styled.div`
cursor: pointer;
transition: color 0.1s;
color: ${p => p.theme.colors.text.primary};
display: block;
padding-left: ${p => p.theme.spacing.xs};
`

const ActiveVentingGripes = styled.div`
cursor: pointer;
transition: color 0.1s;
color: ${p => p.theme.colors.text.primary};
display: block;
padding-left: ${p => p.theme.spacing.xs};
background-color: white;
`


const List = styled.ul`
  list-style-type: none;
  padding: 0;
  line-height: 40px;
  padding-left : 20px;
  margin-top: 0px;
  padding-right: 30px;
  font-size: ${p => p.theme.font.size.xs};
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.p`
  margin-left: ${p => p.theme.spacing.sm};
  font-size: 15px;
  line-height: 18px;
  aglin: left;
  font-weight: 500;
  font-family: Roboto-Medium;
  color: #636972;
  `;

const Line = styled.div`
  width: 100%;
  border-top: solid 1px #DEDFE3;
  height: 20px;
  margin-top: 20px;
`
/**
 * Navigation component used in SideBar
 */
const Navigation = ({ 
  venting,
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
  const [isSelected, SetSelect] = useState("mainfeed");

  const mainfeedclicked = () => {
    SetSelect("mainfeed")
  }

  const adminclicked = () => {
    SetSelect("administration")
  }

  const recordclicked = () => {
    SetSelect("record")
  }

  const annoclicked = () => {
    SetSelect("announcements")
  }

  const astronomyclicked = () => {
    SetSelect("astronomy")
  }

  const climateclicked = () => {
    SetSelect("climate")
  }

  const medicineclicked = () => {
    SetSelect("medicine")
  }

  const musicclicked = () => {
    SetSelect("music")
  }
 
  const vikingclicked =()=>{
    SetSelect("vikings")
  }


  return (
    <>
      <ContentTitle text="Channels" />
      <List>
        <Link
          to={generatePath(Routes.USER_PROFILE, {
            username: auth.user.username,
          })}
        >
          <ListItem>
            <PublicIcon />
            <Name>Public & Permanent</Name>
          </ListItem>
        </Link>

        <VentingGripes onClick={venting}>
          <ListItem>
            <VentingIcon />
            <Name>Venting & Gripes</Name>
          </ListItem>
        </VentingGripes>
      </List>
      <ContentTitle text="Private Groups" />
      <List>
        <Link exact activeClassName="selected" to={Routes.HOME}>
          <ListItem>
            <BirthdayIcon />
            <Name>Sam's surpirse brithday</Name>
          </ListItem>
        </Link>

        <Link exact activeClassName="selected" to={Routes.HOME}>
          <ListItem>
            <YaleIcon />
            <Name>Yale & Eric</Name>
          </ListItem>
        </Link>
      </List>
      <ContentTitle text="Groups" />
      <List>
        {isSelected == "mainfeed" ?
          <ActiveVentingGripes ClassName="selected" onClick={mainfeed} onClickCapture={mainfeedclicked}>
            <ListItem>
              <MainfeedIcon />
              <Name>Main Feed</Name>
            </ListItem>
          </ActiveVentingGripes> :
          <VentingGripes ClassName="selected" onClick={mainfeed} onClickCapture={mainfeedclicked}>
            <ListItem>
              <MainfeedIcon />
              <Name>Main Feed</Name>
            </ListItem>
          </VentingGripes>
        }
        {isSelected == "administration" ?
          <ActiveVentingGripes ClassName="selected" onClick={administration} onClickCapture={adminclicked}>
            <ListItem>
              <AdministratorIcon />
              <Name>Administration</Name>
            </ListItem>
          </ActiveVentingGripes> :
          <VentingGripes ClassName="selected" onClick={administration } onClickCapture={adminclicked}>
            <ListItem>
              <AdministratorIcon />
              <Name>Administration</Name>
            </ListItem>
          </VentingGripes>
        }
        {isSelected == "record" ?
          <ActiveVentingGripes ClassName="selected" onClick={record} onClickCapture={recordclicked}>
            <ListItem>
              <PublicRecordIcon />
              <Name>Public Record</Name>
            </ListItem>
          </ActiveVentingGripes> :
          <VentingGripes ClassName="selected" onClick={record} onClickCapture={recordclicked}>
            <ListItem>
              <PublicRecordIcon />
              <Name>Public Record</Name>
            </ListItem>
          </VentingGripes>
        }
        <Line></Line>
        {isSelected == "announcements" ?
          <ActiveVentingGripes ClassName="selected" onClick={announcements} onClickCapture={annoclicked}>
            <ListItem>
              <AnnouncementsIcon />
              <Name>Announcements</Name>
            </ListItem>
          </ActiveVentingGripes> :
          <VentingGripes ClassName="selected" onClick={announcements} onClickCapture={annoclicked}>
            <ListItem>
              <AnnouncementsIcon />
              <Name>Announcements</Name>
            </ListItem>
          </VentingGripes>
        }
        {isSelected == "astronomy" ?
          <ActiveVentingGripes ClassName="selected" onClick={astronomy} onClickCapture={astronomyclicked}>
            <ListItem>
              <AstronomyIcon />
              <Name>Astronomy</Name>
            </ListItem>
          </ActiveVentingGripes> :
          <VentingGripes ClassName="selected" onClick={astronomy} onClickCapture={astronomyclicked}>
            <ListItem>
              <AstronomyIcon />
              <Name>Astronomy</Name>
            </ListItem>
          </VentingGripes>
        }
        {isSelected == "climate" ?
          <ActiveVentingGripes ClassName="selected" onClick={climate} onClickCapture={climateclicked}>
            <ListItem>
              <ClimateIcon />
              <Name>Climate Change</Name>
            </ListItem>
          </ActiveVentingGripes> :
          <VentingGripes ClassName="selected" onClick={climate} onClickCapture={climateclicked}>
            <ListItem>
              <ClimateIcon />
              <Name>Climate Change</Name>
            </ListItem>
          </VentingGripes>
        }
        {isSelected == "medicine" ?
          <ActiveVentingGripes ClassName="selected" onClick={medicine} onClickCapture={medicineclicked}>
            <ListItem>
              <MedicineIcon />
              <Name>Medicine</Name>
            </ListItem>
          </ActiveVentingGripes> :
          <VentingGripes ClassName="selected" onClick={medicine} onClickCapture={medicineclicked}>
            <ListItem>
              <MedicineIcon />
              <Name>Medicine</Name>
            </ListItem>
          </VentingGripes>
        }
        {isSelected == "music" ?
          <ActiveVentingGripes ClassName="selected" onClick={music} onClickCapture={musicclicked}>
            <ListItem>
              <MusicIcon />
              <Name>Music</Name>
            </ListItem>
          </ActiveVentingGripes> :
          <VentingGripes ClassName="selected" onClick={music} onClickCapture={musicclicked}>
            <ListItem>
              <MusicIcon />
              <Name>Music</Name>
            </ListItem>
          </VentingGripes>
        }
        {isSelected == "vikings" ?
          <ActiveVentingGripes ClassName="selected" onClick={vikings} onClickCapture={vikingclicked}>
            <ListItem>
              <VikingsIcon />
              <Name>Vikings</Name>
            </ListItem>
          </ActiveVentingGripes> :
          <VentingGripes ClassName="selected" onClick={vikings} onClickCapture={vikingclicked}>
            <ListItem>
              <VikingsIcon />
              <Name>Vikings</Name>
            </ListItem>
          </VentingGripes>
        }
      </List>
      <ContentTitle text="Places" />
      <List>
        <Link exact activeClassName="selected" to={Routes.HOME}>
          <ListItem>
            <NewYorkIcon />
            <Name>New York</Name>
          </ListItem>
        </Link>
        <Link exact activeClassName="selected" to={Routes.HOME}>
          <ListItem>
            <AngelesIcon />
            <Name>Los Angeles</Name>
          </ListItem>
        </Link>
        <Link exact activeClassName="selected" to={Routes.HOME}>
          <ListItem>
            <TorontoIcon />
            <Name>Toronto</Name>
          </ListItem>
        </Link>
        <Link exact activeClassName="selected" to={Routes.HOME}>
          <ListItem>
            <PreferIcon />
            <Name>Prefer not to say</Name>
          </ListItem>
        </Link>
      </List>
    </>
  );
};

Navigation.propTypes = {
  venting: PropTypes.func.isRequired,
  mainfeed: PropTypes.func.isRequired,
  administration:PropTypes.func.isRequired,
  announcements :PropTypes.func.isRequired,
  astronomy :PropTypes.func.isRequired,
  record: PropTypes.func.isRequired,
  climate: PropTypes.func.isRequired,
  music:PropTypes.func.isRequired,
  medicine: PropTypes.func.isRequired,
  vikings:PropTypes.func.isRequired
};

export default Navigation;
