import React, { useState } from 'react';
import * as S from './styles/UserInputs.style';

const handleErrorMessage = (type, userDetails) => {
    if (!userDetails.formValidation[type]) {
        const errorMessages = {
            name: 'Name must contain atleast two words!',
            email: 'Invalid email format!'
        };
        return errorMessages[type];
    }
}

const handleUserInput = (props, input, type) => {
    props.setUserDetails({
        ...props.userDetails,
        [type]: input.target.value,
        formValidation: { ...props.userDetails.formValidation, ...props.handleFormValidation(input, props.userDetails) }
    });
}

function UserInputs({ props }) {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    return (
        <>
            <S.Wrapper userDetails={props.userDetails} type={'name'} >
                <label htmlFor='name'></label>
                <S.Input
                    name='name'
                    type='name'
                    id='name'
                    placeholder='Full Name'
                    value={props.userDetails.name}
                    onChange={input => handleUserInput(props, input, 'name')}
                />
            </S.Wrapper >
            <S.Error>{handleErrorMessage('name', props.userDetails)}</S.Error>

            <S.Wrapper userDetails={props.userDetails} type={'email'} >
                <label htmlFor='email'></label>
                <S.Input
                    name='email'
                    type='email'
                    id='email'
                    placeholder='Email'
                    value={props.userDetails.email}
                    onChange={input => handleUserInput(props, input, 'email')}
                />
            </S.Wrapper >
            <S.Error>{handleErrorMessage('email', props.userDetails)}</S.Error>

            <S.Wrapper userDetails={props.userDetails} type={'password'} >
                <label htmlFor='password'></label>
                <S.Input
                    name='password'
                    type={passwordVisibility ? 'text' : 'password'}
                    id='password'
                    placeholder='Password'
                    value={props.userDetails.password}
                    onChange={input => handleUserInput(props, input, 'password')}
                />
                <S.AwesomeEye
                    ispasswordempty={props.userDetails.password}
                    icon={passwordVisibility ? 'eye' : 'eye-slash'}
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                />
            </S.Wrapper >
        </>
    )
};

export default UserInputs;
