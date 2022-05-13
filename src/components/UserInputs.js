import React, { useState } from 'react';
import InputErrorHandle from './InputErrorHandle';
import * as S from './styles/UserInputs.style';

const handleUserInputChange = (props, input) => {
    props.setUserDetails({
        ...props.userDetails,
        [input.target.id]: input.target.value,
        formValidation: {
            ...props.userDetails.formValidation,
            ...props.handleFormValidation(input, props.userDetails)
        }
    });
}

function UserInputs({ props }) {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    return (
        <>
            <S.inputWrapper
                {...props.userDetails}
                type='name'
            >
                <label htmlFor='name'></label>
                <S.Input
                    id='name'
                    name='name'
                    type='name'
                    value={props.userDetails.name}
                    placeholder='Full Name'
                    onChange={input => handleUserInputChange(props, input)}
                />
            </S.inputWrapper >
            <InputErrorHandle type='name' isInputTypeValid={props.userDetails.formValidation.name} />

            <S.inputWrapper
                {...props.userDetails}
                type='email'
            >
                <S.Input
                    id='email'
                    name='email'
                    type='email'
                    value={props.userDetails.email}
                    placeholder='Email'
                    onChange={input => handleUserInputChange(props, input)}
                />
            </S.inputWrapper >
            <InputErrorHandle type='email' isInputTypeValid={props.userDetails.formValidation.email} />

            <S.inputWrapper>
                <S.Input
                    id='password'
                    name='password'
                    type={passwordVisibility ? 'text' : 'password'}
                    value={props.userDetails.password}
                    placeholder='Password'
                    onChange={input => handleUserInputChange(props, input)}
                />
                <S.PasswordVisibilityIcon
                    ispasswordempty={props.userDetails.password}
                    icon={passwordVisibility ? 'eye' : 'eye-slash'}
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                />
            </S.inputWrapper >
        </>
    )
};

export default UserInputs;
