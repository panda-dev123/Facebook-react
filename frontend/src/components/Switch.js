import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`

const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 30px;
    height: 13px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
    margin-top: 14px;
    $:checked{
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
`

const SwitchButton = styled.span`
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 9px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    $::checked{
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
`
const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <Checkbox
        checked={isOn}
        onChange={handleToggle}
        id={`react-switch-new`}
        type="checkbox"
      />
      <Label
        style={{ background: isOn && onColor }}
        htmlFor={`react-switch-new`}
      >
        <SwitchButton />
      </Label>
    </>
  );
};

export default Switch;
