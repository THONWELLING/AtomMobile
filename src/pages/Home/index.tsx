import React, { useState, useContext } from 'react'
import { Text, FlatList } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import * as C from './styles'
import { AuthMobileContext } from '../../contexts/AuthMobileContext'
import Loading from '../../components/Loading'
import { DrawerParamsList } from '../../routes/drawer.routes'
import Card from '../../components/Card'

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DrawerParamsList>>()

  const [loading, setLoading] = useState(false)
  const { user, signOut } = useContext(AuthMobileContext)


  const handleNavigationToProducts = () => {
    navigation.navigate('Vendas')
  }

  return (
    <>
      <C.ScrollView>
        <C.Image source={require('../../assets/sistema/geral/splash-sem-fundo.png')} />
        {loading &&
          <Loading />
        }
        {user &&
          <>
            <C.Top animation={'fadeInLeft'}>
              <C.Sair onPress={signOut}>
                <C.ButtonText>Loggout</C.ButtonText>
              </C.Sair>
              <C.TotalMoviesText>Usuário Logado    {user.resultado.pa_logado} </C.TotalMoviesText>
              <C.Sair onPress={handleNavigationToProducts}>
                <C.ButtonText>Version: {user.resultado.versao_app}</C.ButtonText>
              </C.Sair>
            </C.Top>
            <C.Container>
              <C.List>
                <FlatList
                  data={user.resultado.permissoes.empresas}
                  renderItem={({ item }) => (
                    <Card style={{ flexDirection: 'row' }}>
                      <Text style={{ marginRight: '2%' }}>Unidade: {item.diag_unidade}</Text>
                      <Text>Nome da Empresa: {item.unidade}</Text>
                    </Card>
                  )}
                  keyExtractor={(item) => item.unidade}
                />
                <FlatList
                  data={user.resultado.permissoes.telas}
                  renderItem={({ item }) => (
                    <Card style={{ flexDirection: 'row' }}>
                      <Text style={{ marginRight: '1%' }}>Código da Tela {item.cod_tela}</Text>
                      <Text>Título ad Tela {item.nome_tela}</Text>
                    </Card>
                  )}
                  keyExtractor={(item) => item.nome_tela}
                />
              </C.List>
            </C.Container>
          </>
        }
      </C.ScrollView>
    </>
  )
}
export default Home