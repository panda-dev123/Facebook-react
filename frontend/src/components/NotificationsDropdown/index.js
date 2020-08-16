// @flow
import React from 'react'
import {
  Container, ListItem, StyledCircledIcon, Text
} from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'
import { DropdownPanel } from '../DropdownPanel'


export const NotificationsDropdown = (props) => {
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
            width: 261,
            paddingBottom: 13,
            paddingTop: 21
          }}
          arrowRightPos={187}
        >
          <ListItem>
            <StyledCircledIcon
              src={theme.images.bellSolidGray}
              iconWidth={15.75}
              iconHeight={18}
            />
            <Text>Enable Notifications</Text>
          </ListItem>
          <ListItem>
            <StyledCircledIcon
              src={theme.images.bellSolidSlashedGray}
              iconWidth={25}
              iconHeight={20}
            />
            <Text>Mute Notifications</Text>
          </ListItem>
          <ListItem>
            <StyledCircledIcon
              src={theme.images.bellOutlineSlashedGray}
              iconWidth={25}
              iconHeight={20}
            />
            <Text>Mute for 12 Hours</Text>
          </ListItem>
        </DropdownPanel>
      </Container>
    </ThemeProvider>
  )
}
