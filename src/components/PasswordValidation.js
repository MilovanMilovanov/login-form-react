import React from 'react';
import * as S from './styles/PasswordValidation.style';

const passwordRequirements = [
    'Cannot contain your email name.',
    'Cannot start or end with white space.',
    'Must contain an uppercase letter.',
    'Must contain a lowercase letter.',
    'Must contain a number.',
    'Must be between 8 and 72 characters.'
]

function PasswordValidation({ userDetails }) {
    return (
        <>
            {
                userDetails.password &&
                <S.Wrapper ispasswordempty={userDetails.password}>
                    {
                        Object
                            .keys(userDetails.formValidation.passwordValidation)
                            .map((key, index) => {
                                const icon = userDetails.formValidation.passwordValidation[key] ? 'check' : 'times';
                                return (
                                    <S.Paragraph setOpacity={icon} key={key}>
                                        <S.PasswordValidationIcon icon={icon} fixedWidth />
                                        <span>{passwordRequirements[index]}</span>
                                    </S.Paragraph>
                                )
                            })
                    }
                </S.Wrapper>
            }
        </>
    )
}

export default PasswordValidation;
