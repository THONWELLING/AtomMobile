import React,{ useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialIcons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { AuthMobileContext } from '../contexts/AuthMobileContext'
import THEME from '../theme'

import Home from '../pages/Home'
import ContasAPagar from '../pages/ContasAPagar'
import Vendas from '../pages/Vendas'
//import Pedidos from '../pages/Pedidos'
import ContasAReceber from '../pages/ContasAReceber'
import Expedicao from '../pages/Expedicao'
import Inventario from '../pages/Inventario'
import Produtos from '../pages/Produtos'



export type DrawerParamsList = {
  Home: undefined
  Produtos: undefined
  ContasAPagar: undefined
  ContasAReceber: undefined
  Expedicao: undefined
  Inventario: undefined
  Vendas: undefined
  Pedidos: undefined
}

const Drawer = createDrawerNavigator()


const DrawerRoutes = ({ cod_tela }: { cod_tela: number }) => {

  const { user } = useContext(AuthMobileContext)
  const Permissoes = user.resultado.permissoes.telas


  //determinando qual é a tela pelo código da tela 
  const getScreenComponent = (cod_tela: number) => {
    switch (cod_tela) {
      case 102:
        return <ContasAPagar />
      case 103:
        return <ContasAReceber />
      case 105:
        return <Vendas />
      case 106:
        return <Expedicao />
      case 107:
        return <Inventario />
      case 108:
        return <Produtos />
      // case 109:
      //   return <Pedidos />
      default:
        return <Home />
    }
  }

  //Determinando qual é o ícone que será renderizado par cada tela no drawer
  const getDrawerIcon = (cod_tela: number) => {
    switch (cod_tela) {
      case 102:
        return <Fontisto name='wallet' size={25} color={THEME.COLORS.Tertiary} />
      case 103:
        return <MaterialCommunityIcons name='wallet-plus' size={25} color={THEME.COLORS.Tertiary} />
        case 105:
        return <MaterialCommunityIcons name='sale' size={25} color={THEME.COLORS.Tertiary} />
      case 106:
        return <MaterialCommunityIcons name='truck-delivery' size={25} color={THEME.COLORS.Tertiary} />
      case 107:
        return <MaterialCommunityIcons name='treasure-chest' size={25} color={THEME.COLORS.Tertiary} />
      case 108:
        return <MaterialCommunityIcons name='select-group' size={25} color={THEME.COLORS.Tertiary} />
      // case 109:
      //   return <Pedidos />
      default:
        return <MaterialIcons name='home' size={25} color={THEME.COLORS.Tertiary} />
    }
  }


  return (
    <Drawer.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: THEME.COLORS.Tertiary,
      drawerActiveTintColor: "#000",
      drawerInactiveTintColor: THEME.COLORS.Tertiary,
      drawerLabelStyle: {fontSize: 13, fontStyle: 'italic'},
      headerStyle: { backgroundColor: THEME.COLORS.Primary},
      drawerStyle: { backgroundColor: THEME.COLORS.Transparency}
    }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          drawerIcon: () => <MaterialIcons name="home" size={25} color={THEME.COLORS.Tertiary} />,
        }}
      />
      {Permissoes.map(({ nome_tela, cod_tela }) => (
        <Drawer.Screen
          key={cod_tela}
          name={nome_tela}
          options={{
            drawerIcon: () => getDrawerIcon(cod_tela)
          }}
        >
          {() => getScreenComponent(cod_tela)}
        </Drawer.Screen>
      ))}
    </Drawer.Navigator>
  )
}
export default DrawerRoutes