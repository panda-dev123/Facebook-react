import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`




export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 24px;
  position: absolute;
  right: 70px;
  margin-top: -10px;
  @media only screen and (max-width: 961px) {
    display: none;
  }
`

export const PlusIcon = styled.img`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin-right: 15px;
  @media only screen and (min-width: 961px) {
    display: none;
  }
`

export const IconsSpacer = styled.div`
  width: 16px;
`

export const SmileyIcon = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
`

export const CameraIcon = styled.img`
  cursor: pointer;
  width: 18px;
  height: 16px;
`

export const GifIcon = styled.img`
  cursor: pointer;
  width: 17.74px;
  height: 16.88px;
`

export const ImageIcon = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
`
