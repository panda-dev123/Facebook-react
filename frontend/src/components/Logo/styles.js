import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${p => p.theme.screen.md}) {
    width: 100px;
    margin: auto;
  }
`

export const Text = styled.div`
  color: ${props => props.theme.colors.White};
  font-family: ${props => props.theme.fonts.MontserratExtraBold};
  font-size: 20px;
`

export const Icon = styled.img`
  width: 34px;
  height: 34px;
  margin-left: 4.5px;
`
