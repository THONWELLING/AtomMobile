import React from 'react'
import { Documento } from '../../types/types'
import Card from '../Card'
import * as C from './styles'
import { formatCurrency } from '../../utils'
import { statusColors } from '../../Constantes'


interface RenderItemProps {
  item: Documento
}


const RenderItem: React.FC<RenderItemProps> = ({ item }) => {

  return (
    <Card onPress={null}>
      <C.RowContainer>
        <C.StyledText fontSize={10}>Doc: {item.documento}</C.StyledText>
        <C.PosicaoText fontSize={11}  color={statusColors[item.posicao]}>
          {item.posicao}
        </C.PosicaoText>
      </C.RowContainer>
      <C.StyledText fontSize={12} bold italic stretch>
        {item.fornecedor}
      </C.StyledText>
      <C.RowContainer>
        <C.StyledText fontSize={10}>Venc: {item.vencimento}</C.StyledText>
        <C.PosicaoText fontSize={10} color={statusColors[item.posicao]}>
          Valor: R$ {formatCurrency(item.valor)}
        </C.PosicaoText>
      </C.RowContainer>
    </Card>
  )
}
export default RenderItem