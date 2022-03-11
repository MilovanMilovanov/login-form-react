import React, { useState } from 'react';

import LoginForm from './components/LoginForm';
import UserAccount from './components/UserAccount';
import MatrixRain from './components/MatrixRainEffect';

import { ThemeProvider } from 'styled-components';
import theme from './components/styles/theme';
import * as S from './components/styles/App.style';
import GlobalStyles from './components/styles/globalStyle';

import { faTimes, faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTimes, faCheck, faEye, faEyeSlash);



function App() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const login = userDetails => {
    delayAndLoadUserAccount(userDetails);
    setBgColorSwitch(!bgColorSwitch);
  }

  const logout = () => {
    setUser({ name: '', email: '', password: '' });
  };

  const delayAndLoadUserAccount = (userDetails) => {
    setTimeout(() => {
      setUser({
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password
      })
    }, 5000);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {user.name && <MatrixRain rainCode={user.name} />}
      <S.AppWrapper appStyle={user.name} >
        {user.name ?
          <UserAccount user={user} logout={logout} />
          :
          <LoginForm login={login} />
        }
      </S.AppWrapper>
    </ThemeProvider>
  )
}

export default App;
