import { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as C from './styles'


interface Options {
  id: number
  text: string
  isSelected: boolean
}

interface CheckboxProps {
  options: Options[]
  onChange: (selectedOptions: Options[]) => void
  multiple: boolean
}



const Checkbox =({options=[], onChange, multiple = false}: CheckboxProps)=> {
  const [selecionado, setSelected] = useState([])

  const toggle =(id: number)=> {
    let index = selecionado.findIndex(i => i === id)
    let arrSelecionados = [...selecionado]
    if (index !== -1 ) {
      arrSelecionados.splice(index, 1)
    } else {
      multiple ? arrSelecionados.push(id) : (arrSelecionados = [id])
    }
    setSelected(arrSelecionados)
  }

  useEffect(()=> {
    onChange(selecionado)
  }, [selecionado])

  return(
    <C.Container>
      {options.map((op, index)=> (
        <C.OptionContainer key={op.id}>
          <C.Touchable borderColor={selecionado.findIndex(i => i === op.id) !== -1 ? '#3EBD93' : '#F28F16'} onPress={() => toggle(op?.id)}>
            {selecionado.findIndex(i => i === op.id) !== -1 ? 
            <MaterialCommunityIcons name='check-bold' size={18} color={'#3EBD93'} />
            : null }
          </C.Touchable>
          <C.OptionText>{op?.text}</C.OptionText>
        </C.OptionContainer>
      ))}
    </C.Container>
  )
}
export default Checkbox