import React from 'react'
import * as C from './styles'


const ListHeader = () => {
  return(
    <C.Container >
      <C.Text delay={800} animation="zoomIn" direction='alternate' duration={2000}>Lista de Documentos</C.Text>
    </C.Container>
  )
}
export default ListHeader