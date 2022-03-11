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

    // console.log('user inputs');

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

    //     < Styled.InputWrapper userDetails = { userDetails } type = { 'name' } >
    //         <label htmlFor={'name'}></label>
    //         <Styled.Input
    //             name={'name'}
    //             id={'email'}
    //             placeholder={'Full Name'}
    //             value={userDetails.name}
    //             type={name}
    //             onChange={input => { handleInputChange(input, 'name') }}
    //         />
    // </Styled.InputWrapper >
    //     <Styled.Error>{handleErrorMessage('name', userDetails)}</Styled.Error>
    //     < Styled.InputWrapper userDetails={userDetails} type={'email'} >
    //         <label htmlFor={'email'}></label>
    //         <Styled.Input
    //             name={'email'}
    //             id={'email'}
    //             placeholder={'Email'}
    //             value={userDetails.email}
    //             type={'email'}
    //             onChange={input => { handleInputChange(input, 'email') }}
    //         />
    //     </Styled.InputWrapper >
    //     <Styled.Error>{handleErrorMessage('email', userDetails)}</Styled.Error>
    //     < Styled.InputWrapper userDetails={userDetails} type={'password'} >
    //         <label htmlFor={'password'}></label>
    //         <Styled.Input
    //             name={'password'}
    //             id={'password'}
    //             placeholder={'Password'}
    //             value={userDetails.password}
    //             type={'password'}
    //             onChange={input => { handleInputChange(input, 'password') }}
    //         />
    //     </Styled.InputWrapper >

};

export default UserInputs;
