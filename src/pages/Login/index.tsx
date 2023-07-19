import React,{ useState, useContext } from "react"
import { TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as Animatable from 'react-native-animatable'


import { AuthMobileContext } from '../../contexts/AuthMobileContext'
import * as C from './styles'
import { StackParamsList } from '../../routes/auth.routes'
import Input from '../../components/Input'
import Button from "../../components/Button"


const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

  const [usuario, setUsuario] = useState<string>('D')
  const [senha, setSenha] = useState<string>('1')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const { signIn, loadingAuth } = useContext(AuthMobileContext)

  const handlePasswordVisibility = () => { setIsPasswordVisible(!isPasswordVisible) }

  const handleLoginButton = async () => {
    if (usuario === '' || senha === '') {
      return
    }
    await signIn({ usuario, senha })
  }

  const handleForgetPassword = () => {}
  const handleUsuario = () => { return }

  const handleSignUpButton = () => { navigation.navigate('Cadastro') }

  return (
    <>
      <C.ScrowView>
        <C.Image source={require('../../assets/sistema/geral/fundo_login.png')}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <C.Container>
              <C.Logo delay={900} animation={'pulse'} duration={600} direction="alternate" iterationCount={"infinite"} source={require
                ('../../assets/icones/originais/340x168.png')} />
              <C.H1 delay={100} animation={'fadeInUp'}>Faça O Seu Login</C.H1>
              <C.H2 delay={200} animation={'fadeInUp'}>Bem vindo(a)!! Digite seus dados abaixo</C.H2>

              <C.InputArea delay={400} animation={'fadeInUp'}>
                <Input
                 label=" "
                  value={usuario}
                  onChangeText={setUsuario}
                  placeholder="Digite o Usuário"
                  keyboardType="email-address"
                  secureTextEntry={!usuario}
                  setSecureTextEntry={handleUsuario}
                  iconName={"mail"}
                  iconColor="#333"
                />
                <Input
                  label=" "
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Digite a Senha"
                  secureTextEntry={!isPasswordVisible}
                  iconName={isPasswordVisible ? "eye" : "eye-off"}
                  iconColor="#333"
                  setSecureTextEntry={handlePasswordVisibility}
                />
              </C.InputArea >
              <Animatable.View delay={600} animation={'fadeInUp'} style={{ width: '85%', alignItems: 'center' }} >
                <Button onPress={handleLoginButton} loading={loadingAuth} title="Entrar" />
              </Animatable.View>
              <C.SignUpBtnArea delay={700} animation={'fadeInUp'}>
                <C.SignUpText>Não Tem Uma Conta?</C.SignUpText>
                <TouchableOpacity onPress={handleSignUpButton}>
                  <C.SignUpBtnText animation={'pulse'} iterationCount={'infinite'} delay={500} >Cadastre-se</C.SignUpBtnText>
                </TouchableOpacity>
              </C.SignUpBtnArea>
            </C.Container>
          </TouchableWithoutFeedback>
        </C.Image>
      </C.ScrowView>
    </>
  )
}
export default Login