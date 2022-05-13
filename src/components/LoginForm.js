import React, { useState, useEffect } from 'react';
import userData from '../userData';
import Title from './Title';
import UserInputs from './UserInputs';
import PasswordValidation from './PasswordValidation';
import Button from './Button';
import * as S from '../components/styles/Title.style';

const handleFormValidation = (input, userDetails) => {
    const id = input.target.id;
    const val = input.target.value;
    const getEmailUsername = () => userDetails.email.substring(0, userDetails.email.lastIndexOf("@"));

    if (id === 'name') return { name: val.match(/^[a-zA-Z]+(\s[a-zA-Z]+)+$/) };

    if (id === 'email') return { email: val.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) };
         
    const passwordValidation = {
        containsEmailUsername: !val.includes(getEmailUsername()),
        whitespace: val.match(/^[^\s].*[^\s]$/),
        uppercase: val.match(/[A-Z]/),
        lowercase: val.match(/[a-z]/),
        number: val.match(/[0-9]/),
        passwordLength: val.match(/^.{8,72}$/)
    }

    const isPasswordValid = Object.values(passwordValidation).every(e => e !== null);

    return {
        passwordValidation,
        isPasswordValid
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
            passwordValidation: {
                containsEmailUsername: '',
                whitespace: '',
                uppercase: '',
                lowercase: '',
                number: '',
                passwordLength: ''
            },
            isPasswordValid: false,
        }
    });



    useEffect(() => {
        userData()
            .then(userData => {
                setUserDetails({ ...userDetails, ...userData.user });
            })
            .catch(err => console.log(err));
    }, []);


    const validateForm = () => Object.values(userDetails.formValidation).every(e => e && e);

    const submitHandler = e => {
        e.preventDefault();

        validateForm() && login(userDetails);
    }

    return (
        <form onSubmit={submitHandler}>
            <Title title={<S.Title>login</S.Title>}/>
            <UserInputs props={{ userDetails, setUserDetails, handleFormValidation }} />
            <PasswordValidation userDetails={userDetails} />
            <Button userDetails={userDetails} validateForm={validateForm}/>
        </form >
    )
}

export default LoginForm;
