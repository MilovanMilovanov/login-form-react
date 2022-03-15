import React from "react";

import VoiceMessage from "./VoiceMessage";
import Button from "./Button";
import Title from './Title';

function UserAccount({ user, logout }) {
    return (
        <>
            <VoiceMessage />
            <Title title={`Welcome, ${user.name}`} />
            <Button props={{ buttonPurpose: logout }} />
        </>
    )
}

export default UserAccount;
