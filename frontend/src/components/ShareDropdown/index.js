// @flow
import React from 'react'
import {
  Container, IconContainer, Icon, ListItem, Text
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'
import { DropdownPanel } from '../DropdownPanel'

export const ShareDropdown = (props) => {
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
            width: 181,
            paddingBottom: 8,
            paddingTop: 8,
            position: "absolute",
            zIndex: 999,
            right: 20,
            marginTop: 10,
            backgroundColor: "white"
          }}
          arrowRightPos={127}
        >
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.sendIconSolid}
                width={13.94}
                height={13.95}
              />
            </IconContainer>
            <Text>Send in Message</Text>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.newspaperIconSolid}
                width={16.8}
                height={11.2}
              />
            </IconContainer>
            <Text>Post in Group</Text>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.mailIconSolid}
                width={14}
                height={14}
              />
            </IconContainer>
            <Text>Send via Email</Text>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.fbIconSolid}
                width={14}
                height={14}
              />
            </IconContainer>
            <Text>Share to Facebook</Text>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.twitterIconSolid}
                width={14}
                height={14}
              />
            </IconContainer>
            <Text>Share to Twitter</Text>
          </ListItem>
          <ListItem>
            <IconContainer>
              <Icon
                src={theme.images.linkedinIconSolid}
                width={14}
                height={14}
              />
            </IconContainer>
            <Text>Share to Linkedin</Text>
          </ListItem>
        </DropdownPanel>
      </Container>
    </ThemeProvider>
  )
}
