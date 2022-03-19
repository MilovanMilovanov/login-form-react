import React, { useState, useEffect } from 'react';

import PasswordRequirements from './PasswordRequirements';
import UserInputs from './UserInputs';
import userData from '../userData';
import Button from './Button';
import Title from './Title';

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
                const emailName = userDetails.email.match(/^\w+([.-]?\w+)*/);
                if (emailName) return emailName[0];
                return false;
            }
            const password = {
                emailName: !val.includes(getEmailName()),
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
        userData()
            .then(userData => {
                setUserDetails({ ...userDetails, ...userData.user });
            })
            .catch(err => console.log(err));
    }, []);

    const isFormValid = Object.values(userDetails.formValidation).every(e => e && e);

    const submitHandler = e => {
        e.preventDefault();
        if (isFormValid) login(userDetails);
    }

    return (
        <form onSubmit={submitHandler}>
            <Title title='login' />
            <UserInputs props={{userDetails, setUserDetails, handleFormValidation}} />
            <PasswordRequirements userDetails={userDetails} />
            <Button props={{ userDetails, isFormValid, buttonPurpose: login }} />
        </form >
    )
}

export default LoginForm;
