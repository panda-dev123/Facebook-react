import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { InputText } from 'components/Form';
import { Button } from 'components/Button'
import { Mutation } from 'react-apollo';
import { GET_USER, Edit_Interesting } from 'graphql/user'
import { useStore } from 'store';

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
    margin-bottom: 25px;
    text-align: center;
    font-size: 30px;
    padding: 50px;
`
const InteresingItem = styled.div`
    padding: 10px 20px;
    background-color: #efefef;
    width: fit-content;
    border-radius: 40px;
    float: left;
    margin: 5px;
`

const Image = styled.img`

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
const Itembutton = styled.a`
    background-color: transparent;
    border: none;
    margin-left: 15px;
    z-index: 10;
`

const InsertInterest = styled.div`
    
`
const AddButton = styled.a`
    position: absolute;
    right: 32px;
    margin-top: -25px;
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

const InterestingModal = ({ onRequestClose, interests, onAddInterest }) => {
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

    const [interesting, setInteresting] = useState(interests);
    const [addVal, setAddVal] = useState("");
    const [{ auth }] = useStore();
    const addInteresting = (event) => {
        setAddVal(event.target.value);
    };

    const handleSubmit = async (e, editProfile) => {
        e.preventDefault();
        editProfile();
        onRequestClose();
    }

    function delInteresting(index) {
        interesting.splice(index, 1);
    };

    function handlekeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var count = 0;
            interesting.map((interest, index) => {
                if (interest.toString() === addVal.toString()) {
                    count++;
                }
            });
            if (count === 0 && addVal != "") {
                setInteresting([...interesting, addVal]);
            }
        }
    };

    function onClickButton() {
        var count = 0;
        interesting.map((interest, index) => {
            if (interest.toString() === addVal.toString()) {
                count++;
            }
        });
        if (count === 0 && addVal != "") {
            setInteresting([...interesting, addVal]);
        }
    }

    return (

        <Mutation
            mutation={Edit_Interesting}
            variables={{ input: { id: auth.user.id, interesting } }}
            refetchQueries={() => [{
                query: GET_USER, variables: { username: auth.user.username }
            }
            ]}
        >
            {(editProfile, { loading, error: apiError }) => {
                return (
                    <Modalbackdrop>
                        <ModalContent>
                            <Close href="#" onClick={onRequestClose}></Close>
                            <ModalTitle>Interests</ModalTitle>
                            <form onSubmit={e => handleSubmit(e, editProfile)}>
                                {interesting.map((interest, index) => {
                                    return (
                                        <InteresingItem key={index}>
                                            {interest}
                                            <Itembutton href="#" onClick={() => delInteresting(index)}>
                                                <Image src={require('../../assets/images/deleteitem.png')} />
                                            </Itembutton>
                                        </InteresingItem>
                                    )
                                })}

                                <InsertInterest>
                                    <InputText
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#e2dddd",
                                            height: "35px",
                                            borderRadius: "15px",
                                            marginTop: '30px',
                                            backgroundColor : "rgb(226, 221, 221)"
                                        }}
                                        onChange={addInteresting}
                                        onKeyDown={handlekeyPress}
                                        placeholder="Add Interest"
                                    />
                                    <AddButton href="#"
                                    >
                                        <img src={require("../../assets/images/Add.png")} onClick={onClickButton} />
                                    </AddButton>
                                    <SaveButton>
                                        <Button
                                            type="submit"
                                            title='Save'
                                            onClick={e => handleSubmit(e, editProfile)}
                                        />
                                    </SaveButton>
                                </InsertInterest>
                            </form>
                        </ModalContent>
                    </Modalbackdrop>
                );
            }}
        </Mutation >
    );
};

export default InterestingModal;