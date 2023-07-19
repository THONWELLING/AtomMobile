import React from 'react'
import { ActivityIndicator } from 'react-native'
import * as C from './styles'


interface Props {
  loading?: boolean
  onPress?: () => void
  title: string
}

const Button =({ loading, onPress, title }: Props) => {
  return (
    <C.Button onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={25} color={`${({ theme }) => theme.COLORS.textColor}`} />
      ) : (
        <C.Title>{title}</C.Title>
      )}
    </C.Button>
  )
}
export default Button