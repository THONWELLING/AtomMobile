import React,{ ReactNode } from "react"
import * as C from './styles'

interface CardGraficoProps {
  children: ReactNode
  onPress?: () => void
  backgroundColor?: string 
}

const CardGrafico: React.FC<CardGraficoProps> = ({ onPress, backgroundColor, children}) => {
  return(
    <C.Container backgroundColor={backgroundColor} onPress={onPress} >
      {children}
    </C.Container>
  )
}
export default CardGrafico