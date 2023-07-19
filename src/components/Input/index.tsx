import React, { useState } from "react"
import { TouchableOpacity, TextInputProps  } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as C from './styles'

export type InputProps = TextInputProps & {
  label?: string
  value: string
  iconName?: string
  iconColor?: string
  secureTextEntry?: boolean
  setSecureTextEntry?: (secureTextEntry: boolean) => void
}


const Input: React.FC<InputProps> = ({ label, value, iconName, iconColor, secureTextEntry, setSecureTextEntry, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = () => {
    setIsFocused(true)
  };

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  return (
    <C.Container>
      {label && <C.Label>{label}</C.Label>}
      <C.InputContainer isFocused={isFocused} >
        <C.Input
          value={value}
          secureTextEntry={secureTextEntry}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
        {iconName &&
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <MaterialCommunityIcons name={iconName} size={25} color={iconColor} />
          </TouchableOpacity>
        }
      </C.InputContainer>
    </C.Container>
  )
}
export default Input