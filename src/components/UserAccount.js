import React from "react";

import VoiceMessage from './VoiceMessage';
import Button from './Button';
import Title from './Title';
import * as S from './styles/UserAccount.style';

const myGithubLinks = [
    'https://MilovanMilovanov.github.io/CV.pdf',
    'https://milovanmilovanov.github.io/Personal-FAQ-with-React'
];

function UserAccount({ user, logout }) {
    return (
        <>
            <VoiceMessage />
            <Title username={user.name} />
            {
                myGithubLinks.map(link => <S.Link key={link}><a href={link} target='_SEJ' rel='noreferrer'>{link}</a></S.Link>)
            }
            < Button logout={logout} />
        </>
    )
}

export default UserAccount;
