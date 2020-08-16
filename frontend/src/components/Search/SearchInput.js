import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Magnifier } from './styles'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '../../constants/themes'

const Root = styled.div`
  width: 100%;
  position: relative;
  z-index: ${p => p.theme.zIndex.xl};
`;

const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 10px;
`;

const Input = styled.input`
  color: white;
  outline: 0;
  height: 40px;
  width: 100%;
  border: 0;
  border-radius: 6px;
  /* padding-left: 40px; */
  padding-right: 40px;
  font-size: 16px;
  font-family: Roboto-Regular;
  background-color: transparent;
  -webkit-transition: border-color 0.1s;
  transition: border-color 0.1s;
  &::placeholder {
    color: white;
    font-family: Roboto-Regular;
    ling-height: 19px;
    font-size: 16px;
  }
`;

const themes = LightTheme
/**
 * Component for rendering search input
 */
const SearchInput = ({
  onChange,
  onFocus,
  value,
  inputRef,
  backgroundColor,
  placeholder,
  hideIcon,
  children,
  autoFocus,
}) => {
  return (
    <Root>
      <Container>
        <Magnifier src={themes.images.magnifierIconWhite} />
        <Input
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          ref={inputRef}
          backgroundColor={backgroundColor}
          type="text"
          placeholder={placeholder}
          hideIcon={hideIcon}
          autoFocus={autoFocus}
        />
      </Container>

      {children}
    </Root>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
  ref: PropTypes.object,
  backgroundColor: PropTypes.string,
  placeholder: PropTypes.string,
  hideIcon: PropTypes.bool,
  children: PropTypes.node,
  autoFocus: PropTypes.bool,
};

export default SearchInput;
