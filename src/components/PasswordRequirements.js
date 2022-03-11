import React from 'react';
import * as S from './styles/PasswordRequirements.style';

const requirements = [
    'Cannot contain your email name.',
    'Cannot start or end with white space.',
    'Must contain an uppercase letter.',
    'Must contain a lowercase letter.',
    'Must contain a number.',
    'Must be between 8 and 72 characters.'
]

function PasswordRequirements({ userDetails }) {

    // console.log('password validation');

    return (
        <S.Wrapper ispasswordempty={userDetails.password}>
            {
                Object.keys(userDetails.formValidation.password).map((key, index) => {
                    const icon = userDetails.formValidation.password[key] ? 'check' : 'times';
                    return (
                        <S.Paragraph setOpacity={icon} key={key}>
                            <S.AwesomeCheckIcon icon={icon} fixedWidth/>
                            <span>{requirements[index]}</span>
                        </S.Paragraph>
                    )
                })
            }
        </S.Wrapper>
    )
}

export default PasswordRequirements;
