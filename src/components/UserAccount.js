import React from "react";

import VoiceMessage from "./VoiceMessage";
import Button from "./Button";
import * as S from '../components/styles/Title.style';

function UserAccount({ user, logout }) {

    return (
        <>
            <VoiceMessage />
            <S.Title isFormValid={true}>Welcome, {user.name}</S.Title>
            <Button props={{buttonPurpose:logout}} />
        </>
    )
}

export default UserAccount;
