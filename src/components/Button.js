import React, { useState, useEffect, useCallback } from 'react';
import MatrixRain from './MatrixRainEffect';
import * as S from './styles/Button.style';

function Button({ userDetails, validateForm, logout }) {
    const [disable, setDisable] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const areUserDetailsEmpty = useCallback(() => {
        if (userDetails) return !Object.values(userDetails).every(e => e !== '');
    }, [userDetails]);

    useEffect(() =>
        setDisable(areUserDetailsEmpty()),
        [areUserDetailsEmpty]
    );

    return (
        <>
            <S.Button
                type="submit"
                disabled={disable}
                isFormValid={isFormValid}
                onClick={() => {
                    if (logout) return logout();
                    if (validateForm()) setIsFormValid(true);
                }}
            >
                {isFormValid && <MatrixRain rainCode={'01'} buttonAnimation={true} />}
                {userDetails ? 'login' : 'logout'}
            </S.Button>
        </>
    )
}

export default Button;
