import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { apiMobileLogin } from "../services/api";


interface AuthContextData {
  user: UserProps
  isAuthenticated: boolean
  signIn: (credentials: SignInProps) => Promise<void>
  status: string
  loadingAuth: boolean
  // loading: boolean
  signOut: () => Promise<void>
}

interface UserProps {
  status: string
  mensagem: string
  resultado: {
    versao_app: number
    pa_logado: number
    caixa_pa: number
    parametros: {
      parametro: string
      empresa: number
      tipo: string
      valor: string
      comando_sql: string
    }[]
    permissoes: {
      telas: {
        cod_tela: number
        nome_tela: string
      }[]
      empresas: {
        diag_unidade: number
        unidade: string
        armazem_id: number
      }[]
    }
  }
}

type StatusProps = {
  status: string
}

type AuthProviderProps = {
  children: ReactNode
}

type SignInProps = {
  usuario: string
  senha: string
}

export const AuthMobileContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null)
  const [status, setStatus] = useState('')

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loadingAuth, setLoadingAuth] = useState(false)
  // const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function loadStoredData() {
      setLoadingAuth(true)
      try {
        const userInfo = await AsyncStorage.getItem('@AtonMobile')
        if (userInfo) {
          const { status } = JSON.parse(userInfo)
          apiMobileLogin.defaults.headers.common['Authorization'] = status
          setIsAuthenticated(true)
          setUser(JSON.parse(userInfo))
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoadingAuth(false)
      }
    }

    loadStoredData()
  }, [])

  const signIn = async ({ usuario, senha }: SignInProps) => {
    setLoadingAuth(true)
    try {
      const { data, headers } = await apiMobileLogin.post('/atonmobile', {
        "tela_requisicao": "login",
        "tipo_operacao": "consultar",
        "pa": 0,
        "parametros": [
          {
            "campo": "usuario",
            "valor": usuario
          },
          {
            "campo": "senha",
            "valor": senha
          }
        ]
      })
      
      const { Authorization } = headers
      apiMobileLogin.defaults.headers.common['Authorization'] = Authorization
      await AsyncStorage.setItem('@AtonMobile', JSON.stringify(data))
      setUser(data)
      setIsAuthenticated(true)
      // const { status } = data.resultado;
      const token = data.status
      const user = data.resultado

      console.log("Token:", Authorization)
      console.log("Usuário:",JSON.stringify( user))
      

    } catch (err) {
      console.log("erro ao acessar ", err)
    } finally {
      setLoadingAuth(false)
    }
  }

  const signOut = async () => {
    setUser(null)
    setIsAuthenticated(false)
    apiMobileLogin.defaults.headers.common["Authorization"] = ""
    await AsyncStorage.removeItem("@AtonMobile")
  }

  return (
    <AuthMobileContext.Provider value={{ user, status, isAuthenticated, signIn, loadingAuth, signOut }}>
      {children}
    </AuthMobileContext.Provider>
  )
}