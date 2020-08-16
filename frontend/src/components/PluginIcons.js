import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import activeplugin from 'assets/images/toggle-switch-on.png'
import deactiveplugin from 'assets/images/toggle-switch-off.png'
import Switch from "./Switch";

export const Text = styled.p`
    font-size: 16px;
    font-family: Roboto-Regular;;
    margin-top: 5px;
    margin-left: 11px;
    color: rgba(0,0,0,0.54) !important;

`

export const Root = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
`

export const Image = styled.img`
    height: 13px;
    margin-top: 12px;
`
const PluginIcon = ({ text }) => {
    const [value, setValue] = React.useState(false);
    const ChangeValue=()=>{
        setValue(!value)
    }
    return (
        <Root onClick={ChangeValue}>
            <Text>{text}</Text>
            {value ?
                <Image src={activeplugin}/>:
                <Image src = {deactiveplugin}/>
            }
        </Root>
    );
}

PluginIcon.propTypes = {
    text: PropTypes.string,
};

export default PluginIcon;