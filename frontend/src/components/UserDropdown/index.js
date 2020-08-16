// @flow
import React, { PureComponent } from 'react'
import {
  Container, AvatarOuterContainer,
  Name, Chevron
} from './styles'
import { ThemeProvider } from 'styled-components'
import { CircleAvatar } from '../CircleAvatar'
import { LightTheme } from '../../constants/themes'
import { CircledCount } from '../CircledCount'
import { LightThemeColors } from '../../constants/colors'

export class UserDropdown extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const theme = LightTheme
    const { className, containerStyle, count, name } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Container style={containerStyle} className={className}>
          <AvatarOuterContainer>
            <CircleAvatar
              width={33}
              height={33}
              src={theme.images.mockProfileImage}
            />
            {count && (
              <CircledCount
                containerStyle={{
                  position: 'absolute',
                  top: -3,
                  right: -8
                }}
                count={2}
                color1={LightThemeColors.YellowGreen}
                borderColor={LightThemeColors.RoyalBlue}
              />
            )}
          </AvatarOuterContainer>
          <Name>{name}</Name>
          <Chevron src={theme.images.chevronDownWhite} />
        </Container>
      </ThemeProvider>
    )
  }
}
