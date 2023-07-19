import React from 'react'
import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { useCallback, useEffect } from 'react'
// import { useFonts, Roboto_300Light_Italic, Roboto_400Regular, Roboto_700Bold_Italic } from '@expo-google-fonts/roboto'
// import * as SplashScreen from 'expo-splash-screen'

import { ThemeProvider } from 'styled-components/native'
import { AuthProvider } from './src/contexts/AuthMobileContext'
import Routes from './src/routes'
import THEME from './src/theme'
//import Loading from './src/components/Loading'

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Roboto_300Light_Italic,
  //   Roboto_400Regular,
  //   Roboto_700Bold_Italic
  // });

  // useEffect(()=> {
  //   const prepare = async()=> {
  //     await SplashScreen.preventAutoHideAsync()
  //   }
  //   prepare()
  // },[])

  // const onLayout = useCallback(async() => {
  //   if(fontsLoaded) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded])

  // if (!fontsLoaded) {return} 

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true} />
          <Routes  />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}