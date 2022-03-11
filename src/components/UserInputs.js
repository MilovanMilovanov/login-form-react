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

function UserInputs({ userDetails, handleUserInput }) {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    return (
        <>
            <S.Wrapper userDetails={userDetails} type={'name'} >
                <label htmlFor='name'></label>
                <S.Input
                    name='name'
                    type='name'
                    id='name'
                    placeholder='Full Name'
                    value={userDetails.name}
                    onChange={input => handleUserInput(input, 'name')}
                />
            </S.Wrapper >
            <S.Error>{handleErrorMessage('name', userDetails)}</S.Error>

            <S.Wrapper userDetails={userDetails} type={'email'} >
                <label htmlFor='email'></label>
                <S.Input
                    name='email'
                    type='email'
                    id='email'
                    placeholder='Email'
                    value={userDetails.email}
                    onChange={input => handleUserInput(input, 'email')}
                />
            </S.Wrapper >
            <S.Error>{handleErrorMessage('email', userDetails)}</S.Error>

            <S.Wrapper userDetails={userDetails} type={'password'} >
                <label htmlFor='password'></label>
                <S.Input
                    name='password'
                    type={passwordVisibility ? 'text' : 'password'}
                    id='password'
                    placeholder='Password'
                    value={userDetails.password}
                    onChange={input => handleUserInput(input, 'password')}
                />
                <S.AwesomeEye
                    ispasswordempty={userDetails.password}
                    icon={passwordVisibility ? 'eye' : 'eye-slash'}
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                />
            </S.Wrapper >
        </>
    )
};

export default UserInputs;
