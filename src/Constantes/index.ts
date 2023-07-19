import theme  from'../theme'

export const statusColors = {
  ABERTA: theme.COLORS.ABERTA,
  BAIXADO: theme.COLORS.BAIXADO,
  BLOQUEADO: theme.COLORS.BLOQUEADO,
  'BX.PARCIAL': theme.COLORS['BX.PARCIAL'],
  CANCELADO: theme.COLORS.CANCELADO,
  FATURADO: theme.COLORS.FATURADO,
  PROTESTADO: theme.COLORS.PROTESTADO
}

export const posicaoImages = {
  ABERTA: require('../assets/sistema/situacao_financeiro/abertos.png'),
  BAIXADO: require('../assets/sistema/situacao_financeiro/baixados.png'),
  BLOQUEADO: require('../assets/sistema/situacao_financeiro/bloqueados.png'),
  'BX.PARCIAL': require('../assets/sistema/situacao_financeiro/baixados_parcial.png'),
  CANCELADO: require('../assets/sistema/situacao_financeiro/cancelados.png'),
  FATURADO: require('../assets/sistema/posicao_pedidos/faturados.png'),
  PROTESTADO: require('../assets/sistema/situacao_financeiro/protestados.png'),
  LOGO: require('../assets/58x58-aton.png'),
  NEGOCIADO: require('../assets/sistema/situacao_financeiro/negociados.png')
}