// @flow
import React from 'react'
import {
  Container, ListItem, Icon, TextContainer, Text,
  IconContainer, TextBold
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'
import { DropdownPanel } from '../DropdownPanel'


export const PostOptionsDropdown = (props) => {
  const theme = LightTheme
  const { containerStyle, className } = props
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={containerStyle}
        className={className}
      >
        <DropdownPanel
          containerStyle={{
            paddingBottom: 10,
            paddingTop: 10
          }}
          arrowRightPos={3}
        >
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.pencilSolidGray}
                width={14}
                height={14}
              />
            </IconContainer>
            <TextContainer>
              <Text>Edit this post</Text>
            </TextContainer>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.bellSolidGray}
                width={12.25}
                height={14}
              />
            </IconContainer>
            <TextContainer>
              <Text>Turn on Notifications for this post</Text>
            </TextContainer>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.warningSolidGray}
                width={14}
                height={14}
              />
            </IconContainer>
            <TextContainer>
              <Text>Report post to group admins</Text>
            </TextContainer>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.snoozeSolidGray}
                width={14}
                height={12}
              />
            </IconContainer>
            <TextContainer>
              <Text>Snooze</Text>
              <TextBold>Winnie</TextBold>
              <Text>for 30 days</Text>
            </TextContainer>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.unfollowSolidGray}
                width={16.31}
                height={13.05}
              />
            </IconContainer>
            <TextContainer>
              <Text>Unfollow</Text>
              <TextBold>Winnie</TextBold>
            </TextContainer>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.cooldownSolidGray}
                width={12.25}
                height={14}
              />
            </IconContainer>
            <TextContainer>
              <Text>Cool down</Text>
            </TextContainer>
          </ListItem>
        </DropdownPanel>
      </Container>
    </ThemeProvider>
  )
}
