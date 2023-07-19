import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";


export const Button = styled.TouchableOpacity`
  width: 98%;
  background-color: ${({theme}) => theme.COLORS.Transparency};
  padding: 2.7%;
  border-radius: ${RFPercentage(3.2)}px;
  margin-top: 10%;
`
export const Title = styled.Text`
  align-self: center;
  color: ${({theme}) => theme.COLORS.Tertiary};
  font-size: ${RFPercentage(2.9)}px;
  font-weight: bold;
`