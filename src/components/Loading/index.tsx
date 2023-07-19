import { ActivityIndicator } from "react-native"
import * as C from "./styles"

const Loading =()=> {
  return(
    <C.LoadingArea>
      <C.Logo source={require('../../assets/Ambar-X.png')} /> 
      <ActivityIndicator size={120} color='#F28F16' />
      <C.LoadingText>Carregando...</C.LoadingText>
    </C.LoadingArea>
  )
}
export default Loading