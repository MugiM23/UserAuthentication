import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import AuthLoadingScreen from './src/AuthLoadingScreen'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function App() {
  return <NavigationContainer >
    <AuthLoadingScreen />
  </NavigationContainer>
}