import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 17px;
  height: 17px;
  border-radius: 8.5px;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  background-color: ${props => props.theme.colors.Crimson};

  @media (max-width: 360px) {
    margin-top: 14px;
  }
`

export const Icon = styled.img`
  width: 12px;
  height: 8px;
  object-fit: contain;
`
