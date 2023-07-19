import React, { useState, useContext } from "react"
import { View, KeyboardAvoidingView, SafeAreaView, ImageBackground, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as Animatable from 'react-native-animatable'

import { AuthContext } from '../../contexts/AuthContext'
import { styles } from "./styles"
import { StackParamsList } from "../../routes/auth.routes"
import Input from "../../components/Input"
import Button from "../../components/Button"


const Cadastro = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);
  
  const { signIn, loadingAuth } = useContext(AuthContext)
  
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  const handlePasswordConfirmVisibility = () => {
    setIsPasswordConfirmVisible(!isPasswordConfirmVisible)
  }
  const handleEmail =()=> { return }
  const handleNome =()=> { return }

  const handleSignUpButton = () => {
    setLoading(true)
    setTimeout(() => navigation.navigate("Login"), 1000)
  }

  return (
    <SafeAreaView style={styles.scrowView}>
      <ImageBackground source={require('../../assets/dartvader2.png')} style={styles.image}>
        <>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior='padding'>
              <View style={styles.container}>
                <Animatable.Image delay={900} animation={'lightSpeedIn'} duration={1500} style={styles.logo} source={require
                  ('../../assets/Ambar-X.png')} />
                <Animatable.Text delay={100} animation={'fadeInUp'} style={styles.h1}>Cadastre-se</Animatable.Text>
                <Animatable.View delay={400} animation={'fadeInUp'} style={styles.inputArea}>
                  <Input
                    label="Nome"
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite Seu Nome"
                    secureTextEntry={!nome}
                    setSecureTextEntry={handleNome}
                    iconName={"account-question"}
                    iconColor="#000"
                  />
                  <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite Seu Email"
                    keyboardType="email-address"
                    secureTextEntry={!email}
                    setSecureTextEntry={handleEmail}
                    iconName={"mail"}
                    iconColor="#000"
                  />
                  <Input
                    label="Senha"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite sua senha"
                    secureTextEntry={!isPasswordVisible}
                    iconName={isPasswordVisible ? "eye" : "eye-off"}
                    iconColor="#000"
                    setSecureTextEntry={handlePasswordVisibility}
                  />
                  <Input
                    label="Confirme a Senha"
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    placeholder="Digite sua senha"
                    secureTextEntry={!isPasswordConfirmVisible}
                    iconName={isPasswordConfirmVisible ? "eye" : "eye-off"}
                    iconColor="#000"
                    setSecureTextEntry={handlePasswordConfirmVisibility}
                  />
                </Animatable.View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
          <Animatable.View delay={600} animation={'fadeInUp'} style={{ width: '100%', alignItems: 'center' }} >
            <Button title={"Cadastrar"} onPress={handleSignUpButton} loading={loading}/>
          </Animatable.View>
        </>
      </ImageBackground>
    </SafeAreaView>

  )
}
export default Cadastro