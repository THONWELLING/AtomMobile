import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import * as C from './styles';


type Props = ViewProps & {
  children: ReactNode
  flexDirection?: 'column' | 'row'
  onPress?: () => void
}

const Card: React.FC<Props> = ({ children, onPress, flexDirection='column', ...rest }: Props) => {
  return (
    <C.Card flexDirection={flexDirection} {...rest}>
      {children}
    </C.Card>
  )
}
export default Card