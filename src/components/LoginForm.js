import React, { useState, useEffect, useRef } from 'react';

import userData from '../userData';
import UserInputs from './UserInputs';
import PasswordRequirements from './PasswordRequirements';
import Button from './Button';
// import MatrixRain from './MatrixRainEffect';
import * as S from '../components/styles/Title.style';


const handleFormValidation = (input, userDetails) => {
    const val = input.target.value;

    switch (input.target.id) {
        case 'name': {
            return { name: val.match(/^[a-zA-Z]+(\s[a-zA-Z]+)+$/) };
        }
        case 'email': {
            return { email: val.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) };
        }
        default: {
            const getEmailName = () => {
                let emailName = userDetails.email.match(/^\w+([.-]?\w+)*/);
                if (emailName) return emailName[0];
                return false;
            }
            const password = {
                emailName: !val.includes(getEmailName()),
                // whitespace: val.replaceAll('•', ' ').match(/^[^\s].*[^\s]$/),
                whitespace: val.match(/^[^\s].*[^\s]$/),
                uppercase: val.match(/[A-Z]/),
                lowercase: val.match(/[a-z]/),
                number: val.match(/[0-9]/),
                passwordLength: val.match(/^.{8,72}$/)
            }
            const isPasswordValid = Object.values(password).every(e => e !== null);

            return {
                password,
                isPasswordValid
            }
        }
    }
};


function LoginForm({ login }) {
    // console.log('login form');
    const hasFetchedData = useRef(false);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        formValidation: {
            name: true,
            email: true,
            isPasswordValid: false,
            password: {
                emailName: '',
                whitespace: '',
                uppercase: '',
                lowercase: '',
                number: '',
                passwordLength: ''
            },
        }
    });


    useEffect(() => {
        if (!hasFetchedData.current) {
            userData()
                .then(userData => {
                    setUserDetails({ ...userDetails, ...userData.user });
                })
                .catch(err => console.log(err));
            hasFetchedData.current = true;
        }
    }, [userDetails]);


    const handleUserInput = (input, type) => {
        setUserDetails({
            ...userDetails,
            // [type]: input.target.value.replaceAll('•', ' '),
            [type]: input.target.value,
            formValidation: { ...userDetails.formValidation, ...handleFormValidation(input, userDetails) }
        });
    }

    const isFormValid = Object.values(userDetails.formValidation).every(e => e && e);

    console.log(isFormValid);


    const submitHandler = e => {
        e.preventDefault();
        // const isFormValid = Object.values(userDetails.formValidation).every(e => e && e);

        if (isFormValid) login(userDetails);
    }

    return (
        <form onSubmit={submitHandler}>
            <S.Title isFormValid={''}>login</S.Title>
            <UserInputs userDetails={userDetails} handleUserInput={handleUserInput} />
            <PasswordRequirements userDetails={userDetails} />
            <Button props={{ userDetails, isFormValid, buttonPurpose: login }} />
            {/* {isFormValid && <MatrixRain rainCode={userDetails.name} />} */}
        </form >
    )
}

export default LoginForm;
