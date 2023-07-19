import React from 'react'
import { posicaoImages, statusColors } from '../../Constantes'
import { CardGraficoProps } from '../../types/types'
import { formatCurrency } from '../../utils'

import * as C from './styles'

const DocumentosTabela: React.FC<CardGraficoProps> = ({ onPress, posicao, quantidade, valor_total }) => {
  return (
    <C.Container onPress={onPress}>
      <C.CardImage source={posicaoImages[posicao]} delay={500} animation="pulse" direction='alternate' iterationCount="infinite" />
      <C.CardText width='35%'>{posicao}</C.CardText>
      <C.CardText>{quantidade}</C.CardText>
      <C.CardText width='35%' color={statusColors[posicao]}>{formatCurrency(valor_total)}</C.CardText>
    </C.Container>
  )
}
export default DocumentosTabela


