import React, { createContext, useState, useEffect, ReactNode} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {api, } from "../services/api";


type AuthContextData = {
  isAuthenticated: string
  signIn: (credentials: SignInProps) => Promise<void>
  status: string
  loadingAuth: boolean
  loading: boolean
  signOut: () => Promise<void>
}

type StatusProps = {
  status: string
}

type AuthProviderProps = {
  children: ReactNode
}

type SignInProps = {
  email: string
  password: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [status, setStatus] = useState('')

  const isAuthenticated = status
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  /**
   * Mantendo o Usuário Logado
   */
  useEffect(() => {
    const getUser = async () => {
      //Pegar Os Dados Do Usuário Salvos No AsyncStorage
      const userInfo = await AsyncStorage.getItem('@Ambar-XApp')
      let hasUser: StatusProps = JSON.parse(userInfo || '{}')

      /**  //verficar se recebemos as informações*/
      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.status}`
        setStatus(status)
      }
      setLoading(false)
    }
    getUser()
  }, [])
  const signIn = async ({ email, password }: SignInProps) => {
    setLoadingAuth(true)

    try {
      const response = await api.post('/loginsimples/', { email, password })

      const { status, token } = response.data //São as informações de login que vem da api
      /*  
        guardando as informações de login do usuário
        o asyncStorage só aceita guardar informações em forma de string
        por isso tenho que pegar as informações, guardar em uma variável e 
        na hora de setar o item com o asyncStorage converte-la para string
      */
      const data = { ...response.data }
      await AsyncStorage.setItem('@Ambar-XApp', JSON.stringify(data))
      /**
       * informando o token recebido nas demais requisições
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      */
      setLoadingAuth(false)
      setStatus(status)
    } catch (err) { console.log("erro ao acessar ", err) }
  }

  const signOut = async () => {
    await AsyncStorage.clear()
      .then(() => {
        setStatus('')
      })
  }


  return (
    <AuthContext.Provider value={{ status, isAuthenticated, signIn, loading, loadingAuth, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}