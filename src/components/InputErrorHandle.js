import * as S from './styles/UserInputs.style';

const inputErrorMessages = {
    name: 'Must contain atleast two names!',
    email: 'Invalid email format!'
};

function InputErrorHandle({ type, isInputTypeValid }) {
    return (
        <>
            {
                !isInputTypeValid &&
                <S.inputErrorMessage > {inputErrorMessages[type]}</S.inputErrorMessage>
            }
        </>
    )

}

export default InputErrorHandle;
