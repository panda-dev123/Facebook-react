import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 17px;
  height: 17px;
  border-radius: 8.5px;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  background-image: ${props => 'linear-gradient(to bottom right,' + props.theme.colors.ElectricViolet3 + ',' + props.theme.colors.BrightTurquoise + ')'};

  @media (max-width: 360px) {
    margin-top: 14px;
  }
`

export const Icon = styled.img`
  width: 11px;
  height: 11px;
  object-fit: contain;
`
