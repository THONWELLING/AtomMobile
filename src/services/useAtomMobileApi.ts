import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiMobile } from './api'
import { Documento } from '../types/types';


export default {
  pegarToken: async () => {
    return await AsyncStorage.getItem('token')
  },
  
  consultarContasPagar: async (dataInicial: string, dataFinal: string, posicaoTodos: boolean, posicaoAbertos: boolean,
    posicaoBaixados: boolean, posicaoBxparcial: boolean, posicaoCancelados: boolean, posicaoBloqueados: boolean,
    posicaoProtestados: boolean, posicaoFaturados: boolean, empresa: number) => {
    
    const response = await apiMobile.post('/atonmobile', {
      "tela_requisicao": "contas_pagar",
      "tipo_operacao": "consultar",
      "pa": 210,
      "parametros": [
        {
          "campo": "tipo_busca",
          "valor": "LISTAR_CTAPAGAR"
        },
        {
          "campo": "data_inicial",
          "valor": dataInicial
        },
        {
          "campo": "data_final",
          "valor": dataFinal
        },
        {
          "campo": "posicao_todos",
          "valor": posicaoTodos
        },
        {
          "campo": "posicao_abertos",
          "valor": posicaoAbertos
        },
        {
          "campo": "posicao_baixados",
          "valor": posicaoBaixados
        },
        {
          "campo": "posicao_bxparcial",
          "valor": posicaoBxparcial
        },
        {
          "campo": "posicao_cancelados",
          "valor": posicaoCancelados
        },
        {
          "campo": "posicao_bloqueados",
          "valor": posicaoBloqueados
        },
        {
          "campo": "posicao_protestados",
          "valor": posicaoProtestados
        },
        {
          "campo": "posicao_faturados",
          "valor": posicaoFaturados
        },
        {
          "campo": "empresa",
          "valor": empresa
        }
      ]
    })
    return response.data
  },
  consultarContasPagarBuscaComposta: async ( empresa: number, codigoBusca: string) => {

    const response = await apiMobile.post('/atonmobile', {
      "tela_requisicao": "contas_pagar",
      "tipo_operacao": "consultar",
      "pa": 210,
      "parametros": [
        {
          "campo": "tipo_busca",
          "valor": "CTAPAGAR_BUSCA_COMPOSTA"
        },
        {
          "campo": "empresa",
          "valor": empresa
        },
        {
          "campo": "codigo_busca",
          "valor": codigoBusca
        }
      ]
    })
    return response.data
  },
  detalheCtaAPagar: async (numeroControle: number) => {
    const response = await apiMobile.post('/atonmobile', {
      "tela_requisicao": "contas_pagar",
      "tipo_operacao": "consultar",
      "pa": 210,
      "parametros": [
        {
          "campo": "tipo_busca",
          "valor": "DETALHE_CTAPAGAR"
        },
        {
          "campo": "numero_controle",
          "valor": numeroControle
        }
      ]
    })
    return response.data
  },
  getGraficoPorPosicao: async (dataInicial: string, dataFinal: string, empresa: number) => {
    const response = await apiMobile.post('/atonmobile', {
      "tela_requisicao": "contas_pagar",
      "tipo_operacao": "consultar",
      "pa": 210,
      "parametros": [
        {
          "campo": "tipo_busca",
          "valor": "GRAFICO_POSICAO"
        },
        {
          "campo": "data_inicial",
          "valor": dataInicial
        },
        {
          "campo": "data_final",
          "valor": dataFinal
        },
        {
          "campo": "empresa",
          "valor": empresa
        }
      ]
    })
    return response.data
  },
  getCtaAPagarPorPosicao: async (dataInicial: string, dataFinal: string, posicao: string, empresa: number) => {
    
    const response = await apiMobile.post('/atonmobile', {
      "tela_requisicao": "contas_pagar",
      "tipo_operacao": "consultar",
      "pa": 210,
      "parametros": [
        {
          "campo": "tipo_busca",
          'valor': 'CTAPAGAR_POSICAO'
        },
        {
          'campo': 'data_inicial',
          'valor': dataInicial
        },
        {
          'campo': 'data_final',
          'valor': dataFinal
        },
        {
          'campo': 'posicao',
          'valor': posicao
        },
        {
          "campo": "empresa",
          "valor": empresa
        }
      ]
    })
    return response.data
  },
  getCtaPagarDanfe: async (nfeId: number) => {
    const response = await apiMobile.post('/atonmobile', {
      "tela_requisicao": "contas_pagar",
      "tipo_operacao": "consultar",
      "pa": 210,
      "parametros": [
        {
          "campo": "tipo_busca",
          "valor": "CTAPAGAR_DANFE"
        },
        {
          "campo": "nfe_id",
          "valor": nfeId
        }
      ]
    })
    return response.data
  }
}