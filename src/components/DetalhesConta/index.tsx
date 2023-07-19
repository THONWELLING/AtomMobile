import React, { useEffect, useState } from'react'
import * as Animatable from'react-native-animatable'
//import Pdf from 'react-native-pdf'
import Pdf from '../Pdf'

import { Documento } from '../../types/types'
import { parseDate, formatCurrency } from '../../utils'
import Button from '../Button'
import * as C from'./styles'
import useAtomMobileApi from '../../services/useAtomMobileApi'


type DetalhesContaProps = {
  resultado?: Documento
  onClose: () => void
}

const DetalhesConta: React.FC<DetalhesContaProps> = ({ resultado, onClose }) => {
  const [nfeId, setNfeId] = useState<number>(0)
  const [pdfConteudo, setPdfConteudo] = useState<string>('')

  const vencimentoDate = parseDate(resultado.vencimento)
  const currentData = new Date()
  const isExpired = vencimentoDate <= currentData



  const handleShowPdf = async() => {
    setNfeId(resultado.nfe_id)
    console.log("Id Nota Fiscal ======> " + nfeId)
    try {
      const response: DetalhesContaProps = await useAtomMobileApi.getCtaPagarDanfe(nfeId)
      if (response && response.resultado.danfe_base64) {
        const pdf = response.resultado.danfe_base64
        setPdfConteudo(pdf)
        console.log(pdfConteudo)
      }
    } catch (error) {
      console.error(error)
    }
  }
  

  useEffect(() => {
    handleShowPdf()
  }, [])
  

  return (
    <C.DetalhesContaContainer>
      {pdfConteudo ?
        (
          <Pdf pdfConteudo={pdfConteudo} />
        ) : (
          <>
            <C.DetalhesContaValue bold italic>{resultado.fornecedor}</C.DetalhesContaValue>
            <C.DetalhesArea>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Documento:</C.DetalhesContaLabel>
                <C.DetalhesContaValue>{resultado.documento}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Nota Fiscal:</C.DetalhesContaLabel>
                <C.DetalhesContaValue>{resultado.nfe_numero || 0}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
              <C.DanfeArea onPress={handleShowPdf}>
                <C.DetalhesBuscar source={require('../../assets/sistema/geral/visualizar.png')} animation="pulse" iterationCount="infinite" duration={800}/>
              </C.DanfeArea>
            </C.DetalhesArea>
            <C.DetalhesArea>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Posição:</C.DetalhesContaLabel>
                <C.DetalhesContaValue>{resultado.posicao}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Vencimento:</C.DetalhesContaLabel>
                <Animatable.View 
                  animation={vencimentoDate <= currentData ? 'shake' : undefined}
                  iterationCount={vencimentoDate <= currentData ? 'infinite' : undefined }
                  duration={vencimentoDate <= currentData ? 2500 : undefined}
                >
                  <C.AnimatedValue isExpired={isExpired}>{resultado.vencimento}</C.AnimatedValue>
                </Animatable.View>
              </C.DetalhesPosicao>
            </C.DetalhesArea>
            <C.DetalhesArea>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Centro de Custo:</C.DetalhesContaLabel>
                <C.DetalhesContaValue>{resultado.centro_custo}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Setor:</C.DetalhesContaLabel>
                <C.DetalhesContaValue>{resultado.setor || 'Indefinido'}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
            </C.DetalhesArea>
            <C.DetalhesArea>
              <C.DetalhesPosicao>
              <C.DetalhesContaLabel>Categoria:</C.DetalhesContaLabel>
              <C.DetalhesContaValue>{resultado.categoria}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Classificação:</C.DetalhesContaLabel>
                <C.DetalhesContaValue>{resultado.classificacao}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
            </C.DetalhesArea>
            <C.DetalhesArea>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Espécie do Documento:</C.DetalhesContaLabel>
                <C.DetalhesContaValue>{resultado.especie_documento}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Portador:</C.DetalhesContaLabel>
                <C.DetalhesContaValue>{resultado.portador}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
            </C.DetalhesArea>
            <C.DetalhesArea>
              <C.DetalhesPosicao>
                <C.DetalhesContaLabel>Código de Barras:</C.DetalhesContaLabel>
                <C.DetalhesContaValue>{resultado.codigo_barras || 0}</C.DetalhesContaValue>
              </C.DetalhesPosicao>
              <C.DetalhesPosicao>
                <C.DetalhesBuscar source={require('../../assets/sistema/geral/copiar.png')} animation="pulse" iterationCount="infinite" duration={1500}/>
              </C.DetalhesPosicao>
            </C.DetalhesArea>
            <C.DetalhesContaLabel>Valor:</C.DetalhesContaLabel>
            <C.DetalhesContaValue>{formatCurrency(resultado.valor)}</C.DetalhesContaValue>
          </> 
        )   
      }
      <Button title='Voltar' onPress={onClose} />
    </C.DetalhesContaContainer>
  )
}
export default DetalhesConta