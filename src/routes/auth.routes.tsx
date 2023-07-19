import React from 'react'
import { createNativeStackNavigator  } from'@react-navigation/native-stack'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'


export type StackParamsList = {
  Login: undefined
  Cadastro: undefined
}

const Stack = createNativeStackNavigator()

const AuthRoutes =()=> {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default AuthRoutes