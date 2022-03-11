import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles/Button.style';
import MatrixRain from './MatrixRainEffect';

function Button({ props }) {
    const [disable, setDisable] = useState(true);
    const [buttonAnimation, setButtonAnimation] = useState(false);

    const areUserDetailsEmpty = useCallback(() => {
        if (props.userDetails) return !Object.values(props.userDetails).every(e => e !== '');
    }, [props.userDetails]);

    useEffect(() => {
        setDisable(areUserDetailsEmpty());
    }, [areUserDetailsEmpty]);


    return (
        <>
            <S.Button
                type="submit"
                disabled={disable}
                isFormValid={props.isFormValid}
                formTitleAnimation={buttonAnimation}
                onClick={() => {
                    props.buttonPurpose.name === 'logout' && props.buttonPurpose()
                    setButtonAnimation(!buttonAnimation);
                }}
            >
                {buttonAnimation && props.isFormValid && <MatrixRain rainCode={'01'} buttonAnimation={true} />}
                {props.buttonPurpose.name}
            </S.Button>
        </>
    )
}

export default Button;
