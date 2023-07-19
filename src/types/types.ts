//tipagem dos gráficos
export interface ApiResposta {
  status: string
  mensagem: string
  resultado: {
    grafico_posicao?: GraficoPosicao[]
    ctapagar_posicao?: Documento[]
  }
}

export interface GraficoPosicao {
  empresa: number
  posicao: string
  quantidade: number
  valor_total: number
}

//tipagem das contas a pagar
export interface Documento {
  empresa?: number
  controle?: number
  documento?: string
  vencimento?: string
  fornecedor?: string
  posicao?: string
  valor?: number
  nfe_id?: number
  nfe_numero?: string
  centro_custo?: string
  setor?: string
  categoria?: string
  classificacao?: string
  portador?: string
  codigo_barras?: string
  especie_documento?: string
  danfe_base64?: string
}

export interface DetalhesContas {
  resultado?: Documento
}

export interface DocumentoResposta {
  status: string
  mensagem: string
  resultado: {
    documentos: Documento[]
  }
}

export interface GraficoContasProps {
  data: GraficoPosicao[]
  highlightedPosition: string
  onPositionPress: (posicao: string) => void
}

export interface CardGraficoProps {
  key?: number
  onPress?: () => void
  posicao: string
  quantidade: number
  valor_total: number
}