
import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import NewsNavigation from './src/components/news/NewsNavigation';
import UserNavigation from './src/components/user/UserNavigation';

import { UserContextProvider, UserContext } from './src/components/user/UserContext';
import { NewsContextProvider } from './src/components/news/NewsContext';

const AppNavigation = () => {
  const { user } = useContext(UserContext);
  //console.log("User app: ", user);
  return (
    <NavigationContainer>
      {/* <NewsNavigation /> */}
      {user ? <NewsNavigation /> : <UserNavigation />}
    </NavigationContainer>
  )
}


const App = () => {
  return (
    <UserContextProvider>
      <NewsContextProvider>
        <AppNavigation />
      </NewsContextProvider>
    </UserContextProvider>
  )
}
export default App;


/**
 * ASM 2
 * Login
 * Register
 * List News
 * Detail News
 * Profile
 * Add News
 * Update Profile
 */
