import React,{ useState, useEffect } from 'react'

import { TouchableWithoutFeedback, ListRenderItemInfo, Text, FlatList, Modal } from 'react-native'


import * as C from './styles'
import useAtomMobileApi from "../../services/useAtomMobileApi"
import RenderItem from '../../components/RenderItem'
import Loading from '../../components/Loading'
import CardGrafico from '../../components/CardGrafico'
import Button from '../../components/Button'
import ListHeader from '../../components/ListHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DetalhesConta from '../../components/DetalhesConta'

import { Documento, GraficoPosicao, ApiResposta, DetalhesContas } from'../../types/types'
import GraficoContas from '../../components/GraficoContas'
import { posicaoImages } from '../../Constantes'
import DocumentosTabela from '../../components/DocumentosTabela'
import { formatDate } from '../../utils'


const ContasAPagar = () => {
  const [contasAPagar, setContasAPagar] = useState<Documento[]>([])
  const [dataInicial, setDataInicial] = useState<string>('01-01-2019')//01-01-2019
  const [dataFinal, setDataFinal] = useState<string>('16-09-2023')//16-09-2023
  const [posicao, setPosicao] = useState<string>('')
  const [empresa, setEmpresa] = useState<number>(1)
  const [visible, setVisible] = useState<boolean>(false)
  const [posicaoTodos, setPosicaoTodos] = useState<boolean>(false)
  const [posicaoAbertos, setPosicaoAbertos] = useState<boolean>(true)
  const [posicaoBaixados, setPosicaoBaixados] = useState<boolean>(false)
  const [posicaoBxparcial, setPosicaoBxparcial] = useState<boolean>(true)
  const [posicaoCancelados, setPosicaoCancelados] = useState<boolean>(true)
  const [posicaoBloqueados, setPosicaoBloqueados] = useState<boolean>(true)
  const [posicaoProtestados, setPosicaoProtestados] = useState<boolean>(true)
  const [posicaoFaturados, setPosicaoFaturados] = useState<boolean>(true)
  const [codigoBusca, setCodigoBusca] = useState<string>('')
  const [numeroControle, setNumeroControle] = useState<number>(0)
  const [detalhesDocumentos, setDetalhesDocumentos] = useState<Documento>({})

  
  const [data, setData] = useState<GraficoPosicao[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [exibirGrafico, setExibirGrafico] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')
  const [highlightedPosition, setHighlightedPosition] = useState<string>('')
  const [showDetalhes, setShowdetalhes] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  
  useEffect(() =>{
    setLoading(true)
    const loadGraficoPorPosicao = async () => {
      try {
        const result: ApiResposta = await useAtomMobileApi.getGraficoPorPosicao(dataInicial, dataFinal, empresa)
        if (result && result.resultado && result.resultado.grafico_posicao) {
          setData(result.resultado.grafico_posicao)
          setExibirGrafico(true)  
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadGraficoPorPosicao()
  },[])
  
  const handleDetalheContasAPagar = async ( numeroControleCard: number) => {
    setLoading(true)
    setNumeroControle(numeroControleCard)
    try {
      const result: DetalhesContas = await useAtomMobileApi.detalheCtaAPagar(numeroControle)
        if (result) {
          setDetalhesDocumentos(result.resultado)
          setModalVisible(true)
        } 
    } catch (error) {
      console.error(error)
    } finally {
      detalhesDocumentos && setLoading(false)
      setShowdetalhes(true)
    }
    console.log('Card pressed:', numeroControle)
  }

  const renderItem = ({ item }: ListRenderItemInfo<Documento>) => {
    return(
      <TouchableOpacity onPress={() => handleDetalheContasAPagar(item.controle)}>
        <RenderItem item={item} />
      </TouchableOpacity>
    )
  }

  const handleCardOnPress = async (posicaoVemDoCard: string) => {
    try {
      setLoading(true)
      setContasAPagar([])
      setExibirGrafico(false)
      const dataAtual = new Date()
      const dataAnterior = new Date(dataAtual)
      dataAnterior.setDate(dataAtual.getDate() - 365)
    
      setDataInicial(formatDate(dataAnterior))
      setDataFinal(formatDate(dataAtual))
      setPosicao(posicaoVemDoCard)

      console.log("Data Inicial ===> " + dataInicial,"  Data Final ===> " +  dataFinal,"  Posição ===> " + posicao, "  Empresa ===> "  + empresa)
      const result: ApiResposta  = await useAtomMobileApi.getCtaAPagarPorPosicao(dataInicial, dataFinal, posicao, empresa)
        setContasAPagar(result.resultado.ctapagar_posicao)        
    } catch (error) {
      console.error(error)
    } finally {
     contasAPagar && contasAPagar.length === 0 && setLoading(false)
    }
  }

  useEffect(() => { handleCardOnPress(posicao) }, [posicao])

  useEffect(() => { handleDetalheContasAPagar(numeroControle) },[numeroControle])

  const handlePositionPress = (posicao: string) => {
    posicao === highlightedPosition ? setHighlightedPosition('') : setHighlightedPosition(posicao)
  }
  

  return (
    <C.Container>
      <TouchableWithoutFeedback onPress={() => setSelected('')}>
        <>
          {exibirGrafico && data ? ( 
            <C.Chart delay={100} animation={'fadeInUp'}>
              <C.Tittle delay={200} animation={'fadeInUp'}>Relação de Contas a Pagar Por Posição</C.Tittle>
              <C.GraficoContainer delay={300} animation={'zoomIn'}>
                <GraficoContas data={data} highlightedPosition={highlightedPosition} onPositionPress={handlePositionPress} />
              </C.GraficoContainer>
                <C.BoxContainer>
                </C.BoxContainer>
                  <CardGrafico backgroundColor='#A9A9A9'>
                    <C.CardImage source={posicaoImages.LOGO} delay={400} animation="rotate" direction='reverse' iterationCount="infinite" />
                    <C.CardText width='35%'>Posição</C.CardText>
                    <C.CardText>Qtd</C.CardText>
                    <C.CardText width='35%'>Total</C.CardText>
                  </CardGrafico>
                <C.BoxContainerList showsVerticalScrollIndicator={false}>
                  {data.map((value, index) => (
                    <DocumentosTabela key={index} onPress={() => handleCardOnPress(value.posicao)} {...value} />
                    ))}
                </C.BoxContainerList>
            </C.Chart>
            ) : (null)}
            {loading ? ( <Loading /> ) : (
              <C.ListContainer delay={200} animation={'fadeInUp'} duration={2200}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  ListHeaderComponent={ListHeader}
                  style={{ width:'100%', height:'80%'}}
                  data={contasAPagar}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  ListEmptyComponent={() => (
                    <Text>Nenhum documento encontrado.</Text>
                  )}
                />
                <C.ListContainer><C.CardText>item</C.CardText></C.ListContainer>
                <Button title='Voltar' onPress={() => {
                  setContasAPagar([])
                  setExibirGrafico(true)
                }} />
              </C.ListContainer>
              )
            } 
            {showDetalhes && detalhesDocumentos.controle ?  (
              <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <DetalhesConta resultado={detalhesDocumentos} onClose={() => setModalVisible(false)} /> 
              </Modal>) : null
            }
        </>
      </TouchableWithoutFeedback>
    </C.Container>
  )
}
export default ContasAPagar













  // const handleCheckboxChange = (selectedOptions) => {
  //   if (selectedOptions.includes(0)) {
  //     setPosicaoTodos(true)
  //     setPosicaoAbertos(false)
  //     setPosicaoBaixados(false)
  //     setPosicaoBxparcial(false)
  //     setPosicaoCancelados(false)
  //     setPosicaoBloqueados(false)
  //     setPosicaoProtestados(false)
  //   } else {
  //     setPosicaoTodos(false)
  //     setPosicaoAbertos(selectedOptions.includes(1))
  //     setPosicaoBaixados(selectedOptions.includes(2))
  //     setPosicaoBxparcial(selectedOptions.includes(3))
  //     setPosicaoCancelados(selectedOptions.includes(4))
  //     setPosicaoBloqueados(selectedOptions.includes(5))
  //     setPosicaoProtestados(selectedOptions.includes(6))
  //   }
  // }
  // const options = [
  //   { id: 0, text: 'Todos', isSelected: false }, { id: 1, text: 'Abertos', isSelected: false },
  //   { id: 2, text: 'Baixados', isSelected: false }, { id: 3, text: 'Bx Parcial', isSelected: false },
  //   { id: 4, text: 'Cancelados', isSelected: false }, { id: 5, text: 'Bloqueados', isSelected: false }, { id: 6, text: 'Protestados', isSelected: false }
  // ]

  // const handleBuscaComposta = async () => {
  //   const result = await useAtomMobileApi.consultarContasPagarBuscaComposta(empresa, codigoBusca)
  //   console.log("Reposta Da Página de Contas A Pagar  ===> " + JSON.stringify(result))
  // }
 
  // const handleDetalheConta = async () => {
  //   const result = await useAtomMobileApi.detalheCtaAPagar(codigoBusca)
  //   console.log("Reposta Da Página de Contas A Pagar  ===> " + JSON.stringify(result))
  // }
  // const handleCtaAPagarPorPosicao = async () => {
  //   const result = await useAtomMobileApi.getCtaAPagarPorPosicao(dataInicial, dataFinal, posicao, empresa)
  //   console.log("Reposta Da Página de Contas A Pagar  ===> " + JSON.stringify(result))
  // }
  // const handleCtaPagarDanfe = async () => {
  //   const result = await useAtomMobileApi.getCtaPagarDanfe(nfeId)
  //   console.log("Reposta Da Página de Contas A Pagar  ===> " + JSON.stringify(result))
  // }

  // const handleUsuario = () => { return }
  // const toggleVisible = () => { setVisible(!visible) }




// <Button title='Consultar Contas a Pagar' onPress={toggleVisible} />
//                     {visible && (
//                       <Card style={{ width: '97%', backgroundColor: 'rgba(248,248,255, 0.25)', alignItems: 'center' }}>
                      
//                         <View>
//                           <Checkbox options={options} onChange={handleCheckboxChange} multiple />
//                           <Text>Posição Todos: {posicaoTodos ? 'true' : 'false'}</Text>
//                           <Text>Posição Abertos: {posicaoAbertos ? 'true' : 'false'}</Text>
//                           <Text>Posição Baixados: {posicaoBaixados ? 'true' : 'false'}</Text>
//                           <Text>Posição Bx parcial: {posicaoBxparcial ? 'true' : 'false'}</Text>
//                           <Text>Posição Cancelados: {posicaoCancelados ? 'true' : 'false'}</Text>
//                           <Text>Posição Bloqueados: {posicaoBloqueados ? 'true' : 'false'}</Text>
//                           <Text>Posição Protestados: {posicaoProtestados ? 'true' : 'false'}</Text>
//                         </View>
//                         <Button title="        Buscar          " loading={loadingAuth} onPress={handleCtaAPagar} />
//                       </Card>
//                     )}

//                     <Button title="consultar Contas Pagar BuscaComposta" onPress={toggleVisible} />
//                     {visible && (
//                       <Card style={{ width: '97%', backgroundColor: 'rgba(248,248,255, 0.25)', alignItems: 'center' }}>
//                         <Input
//                           placeholder="Empresa"
//                           onChangeText={setEmpresa}
//                           value={empresa}
//                           secureTextEntry={!empresa}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='factory'
//                           iconColor='#625547'
//                         />
//                         <Input
//                           placeholder="Código de Busca"
//                           onChangeText={setCodigoBusca}
//                           value={codigoBusca}
//                           secureTextEntry={!codigoBusca}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='tag-search'
//                           iconColor='#625547'
//                         />
//                         <Button title="        Buscar          " loading={loadingAuth} onPress={handleBuscaComposta} />
//                       </Card>
//                     )}

//                     <Button title="Detalhe da Conta" onPress={toggleVisible} />
//                     {visible && (
//                       <Card style={{ width: '97%', backgroundColor: 'rgba(248,248,255, 0.25)', alignItems: 'center' }}>
//                         <Input
//                           placeholder="Número de Controle"
//                           onChangeText={setNumeroControle}
//                           value={numeroControle}
//                           secureTextEntry={!numeroControle}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='factory'
//                           iconColor='#625547'
//                         />
//                         <Button title="        Buscar          " loading={loadingAuth} onPress={handleDetalheConta} />
//                       </Card>
//                     )}

//                     <Button title="Grafico Por Posição" onPress={toggleVisible} />
//                     {visible && (
//                       <Card style={{ width: '97%', backgroundColor: 'rgba(248,248,255, 0.25)', alignItems: 'center' }}>
//                         <Input
//                           placeholder="Data Inicial"
//                           onChangeText={setDataInicial}
//                           value={dataInicial}
//                           secureTextEntry={!dataInicial}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='sort-calendar-ascending'
//                           iconColor='#625547'
//                         />
//                         <Input
//                           placeholder="Data Final"
//                           onChangeText={setDataFinal}
//                           value={dataFinal}
//                           secureTextEntry={!dataFinal}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='sort-calendar-descending'
//                           iconColor='#625547'
//                         />
//                         <Input
//                           placeholder="Empresa"
//                           onChangeText={setEmpresa}
//                           value={empresa}
//                           secureTextEntry={!empresa}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='factory'
//                           iconColor='#625547'
//                         />
//                         <Button title="        Buscar          " loading={loadingAuth} onPress={handleGraficoPorPosicao} />
//                       </Card>
//                     )}

//                     <Button title="Contas a Pagar Por Posição" onPress={toggleVisible} />
//                     {visible && (
//                       <Card style={{ width: '97%', backgroundColor: 'rgba(248,248,255, 0.25)', alignItems: 'center' }}>
//                         <Input
//                           placeholder="Data Inicial"
//                           onChangeText={setDataInicial}
//                           value={dataInicial}
//                           secureTextEntry={!dataInicial}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='sort-calendar-ascending'
//                           iconColor='#625547'
//                         />
//                         <Input
//                           placeholder="Data Final"
//                           onChangeText={setDataFinal}
//                           value={dataFinal}
//                           secureTextEntry={!dataFinal}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='sort-calendar-descending'
//                           iconColor='#625547'
//                         />
//                         <Input
//                           placeholder="Posição"
//                           onChangeText={setPosicao}
//                           value={posicao}
//                           secureTextEntry={!posicao}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='cash-register'
//                           iconColor='#625547'
//                         />
//                         <Input
//                           placeholder="Empresa"
//                           onChangeText={setEmpresa}
//                           value={empresa}
//                           secureTextEntry={!empresa}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='factory'
//                           iconColor='#625547'
//                         />
//                         <Button title="        Buscar          " loading={loadingAuth} onPress={handleCtaAPagarPorPosicao} />
//                       </Card>
//                     )}
//                     <Button title="Consultar DANFE " loading={loadingAuth} onPress={toggleVisible} />
//                     {visible && (
//                       <Card style={{ width: '97%', backgroundColor: 'rgba(248,248,255, 0.25)', alignItems: 'center' }}>
//                         <Input
//                           placeholder="Número da Nota Fiscal Eletrônica"
//                           onChangeText={setNfeId}
//                           value={nfeId}
//                           secureTextEntry={!nfeId}
//                           setSecureTextEntry={handleUsuario}
//                           iconName='identifier'
//                           iconColor='#625547'
//                         />
//                         <Button title="          Buscar         " loading={loadingAuth} onPress={handleCtaPagarDanfe} />
//                       </Card>
//                     )}