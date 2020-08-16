import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Edit_Profile,GET_USER } from 'graphql/user'
import { Button } from 'components/Button'
import { useGlobalMessage } from 'hooks/useGlobalMessage';
import { useStore } from 'store';
import { Mutation } from 'react-apollo';

const Modalbackdrop = styled.div`
    background: rgba(0, 0, 0, .65);
    bottom: 0;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 99;
`

const ModalContent = styled.div`
    background: #fff;
    border-radius: 15px;
    max-width: 100%;
    margin: 50px auto;
    padding: 15px;
    width: 560px;
    position: absolute;
    left: 35%;
    top: 15%;
    z-index: 99;

    @media (max-width: 768px) {
        background: #fff;
        border-radius: 15px;
        margin: 50px auto;
        padding: 15px;
        width: 90%;
        position: absolute;
        left: 5%;
        top: 5%;
        z-index: 99;
    }
`

const ModalTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    font-size: 30px;
    padding: 30px;
`
const EditProfileContent = styled.div`
    width: fit-content;
    border-radius: 40px;
    float: left;
    margin: 5px;
    width: 100%;
`
const InputText = styled.textarea`
    width: 100%;
    height: 30px;
`

const EditItemlist = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 20px;
`

const Label = styled.label`
    width: 100px;
    margin-top: 5px;
`
const Close = styled.a`
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;

    ::hover{
        opacity: 1;
    }
    ::before{
        position: absolute;
        left: 15px;
        content: ' ';
        height: 19px;
        width: 2px;
        background-color: #333;
        transform: rotate(45deg);
    }
    ::after{
        position: absolute;
        left: 15px;
        content: ' ';
        height: 19px;
        width: 2px;
        background-color: #333;
        transform: rotate(-45deg);
    }
`


const AddButton = styled.a`
    position: absolute;
    right: 32px;
    margin-top: 40px;
`

const SaveButton = styled.div`
    align-items: center;
    justify-content: center;
    padding: 40px;
    width: 240px;
    margin: auto;
    @media (max-width: 768px) {
        width: unset;
        padding: 40px 0px;
    }
`

const EditProfile = ({ onRequestClose, user }) => {
    // Use useEffect to add an event listener to the document
    useEffect(() => {
        function onKeyDown(event) {
            if (event.keyCode === 27) {
                // Close the modal when the Escape key is pressed
                onRequestClose();
            }
        }

        // Prevent scolling
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        // Clear things up when unmounting this component
        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    });
    const [error, setError] = useState('');
    const [values, setValues] = useState({
        fullName: user.fullName,
        overview: user.overview,
        address: user.address,
        birthplace: user.birthplace,
        site: user.site,
        birthday: user.birthday,
        education: user.education,
        own: user.own,
    });
    const [interesting, setInteresting] = useState('');
    const message = useGlobalMessage();
    const [{ auth }] = useStore();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e, editProfile) => {
        e.preventDefault();
        editProfile();
        onRequestClose();
    }

    const { overview, address, birthplace, site, birthday, education, own, fullName } = values;

    return (

        <Mutation
            mutation={Edit_Profile}
            variables={{ input: { id: auth.user.id, fullName,overview, address, birthplace, site, birthday, education, own } }}
            refetchQueries={() =>[{
            query: GET_USER, variables: { username: auth.user.username }}
        ]}
        >
            {(editProfile, { loading, error: apiError }) => {
                return (
                    <Modalbackdrop>
                        <ModalContent>
                            <Close href="#" onClick={onRequestClose}></Close>
                            <ModalTitle>Edit Profile</ModalTitle>
                            <form onSubmit={e => handleSubmit(e, editProfile)}>
                                <EditProfileContent>
                                    <EditItemlist>
                                        <Label>Username</Label>
                                        <InputText
                                            type="text"
                                            name="fullName"
                                            values={user.fullName}
                                            onChange={handleChange}
                                            placeholder={user.fullName}
                                            borderColor="white"
                                        />
                                    </EditItemlist>
                                    <EditItemlist>
                                        <Label>Overview</Label>
                                        <InputText
                                            type="text"
                                            name="overview"
                                            values={user.overview}
                                            onChange={handleChange}
                                            placeholder={user.overview}
                                            borderColor="white"
                                        />
                                    </EditItemlist>
                                    <EditItemlist>
                                        <Label>Address</Label>
                                        <InputText
                                            type="text"
                                            name="address"
                                            values={user.address}
                                            onChange={handleChange}
                                            placeholder={user.address}
                                            borderColor="white"
                                        />
                                    </EditItemlist>
                                    <EditItemlist>
                                        <Label>Place of Birth</Label>
                                        <InputText
                                            type="text"
                                            name="birthplace"
                                            values={user.birthplace}
                                            onChange={handleChange}
                                            placeholder={user.birthplace}
                                            borderColor="white"
                                        />
                                    </EditItemlist>
                                    <EditItemlist>
                                        <Label>Site</Label>
                                        <InputText
                                            type="text"
                                            name="site"
                                            values={user.site}
                                            onChange={handleChange}
                                            placeholder="Site"
                                            borderColor="white"
                                        />
                                    </EditItemlist>
                                    <EditItemlist>
                                        <Label>Birthday</Label>
                                        <input
                                            style={{ width: '100%' }}
                                            type="date"
                                            name="birthday"
                                            values={user.birthday}
                                            onChange={handleChange}
                                            placeholder={user.birthday}
                                        />
                                    </EditItemlist>
                                    <EditItemlist>
                                        <Label>Education</Label>
                                        <InputText
                                            type="text"
                                            name="education"
                                            values={user.education}
                                            onChange={handleChange}
                                            placeholder={user.education}
                                            borderColor="white"
                                        />
                                    </EditItemlist>
                                    <EditItemlist>
                                        <Label>Own</Label>
                                        <InputText
                                            type="text"
                                            name="own"
                                            values={user.own}
                                            onChange={handleChange}
                                            placeholder={user.own}
                                            borderColor="white"
                                        />
                                    </EditItemlist>
                                    <SaveButton>
                                        <Button
                                            type="submit"
                                            title='Save'
                                            onClick={e => handleSubmit(e, editProfile)}
                                            outline
                                        />
                                    </SaveButton>
                                </EditProfileContent>
                            </form>

                        </ModalContent>
                    </Modalbackdrop>
                );
            }}
        </Mutation >
    );
};

EditProfile.propTypes = {
    user: PropTypes.object.isRequired,
    refetch:PropTypes.func.isRequired
};

export default EditProfile;