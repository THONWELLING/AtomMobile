import React from 'react'
import { VictoryPie, VictoryTooltip, VictoryChart, VictoryAxis } from 'victory-native'
import { GraficoContasProps } from '../../types/types'
import { statusColors } from '../../Constantes'


const GraficoContas: React.FC<GraficoContasProps> = ({ data, highlightedPosition, onPositionPress }) => {
  return (
    <VictoryChart width={300} height={300} domainPadding={{ x: 10, y: 10 }}>
      <VictoryAxis crossAxis={false} style={{ tickLabels: { display: 'none' } }} />
      <VictoryPie
        data={data}
        x={'posicao'}
        y={'quantidade'}
        style={{
          data: {
            fill: ({ datum }) => statusColors[datum.posicao] || 'orange',
            fillOpacity: ({ datum }) => (datum.posicao === highlightedPosition || highlightedPosition === '') ? 1 : 0,
            stroke: ({ datum }) => datum.posicao === highlightedPosition ? statusColors[datum.posicao] : 'none',
            strokeOpacity: 0.7,
            strokeWidth: 10
          },
          labels: { display: 'none' },
        }}
        innerRadius={50}
        
        animate={{ easing: 'circle' }}
        labelComponent={<VictoryTooltip renderInPortal={false} style={{ color: '#000000' }} orientation={'top'} />}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPress: () => {
                return [
                  {
                    target: 'data',
                    mutation: ({ datum }) => {
                      onPositionPress(datum.posicao)
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
    </VictoryChart>
  )
}
export default GraficoContas
