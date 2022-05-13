import React from "react";

import VoiceMessage from "./VoiceMessage";
import Button from "./Button";
import Title from './Title';
import * as S from '../components/styles/Title.style';

function UserAccount({ user, logout }) {
    return (
        <>
            <VoiceMessage />
            <Title username={user.name} />
            <Button logout={logout} />
        </>
    )
}

export default UserAccount;
