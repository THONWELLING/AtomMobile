import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable';
import { RFPercentage } from 'react-native-responsive-fontsize';

type Props = {
  width?: string
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.Transparency};
  align-content: center;
`
export const Chart = styled(Animatable.View)`
  width: 100%;
  height: 100%;
  align-items: center;
`
export const Tittle = styled(Animatable.Text)` 
  width: 98%;
  height: 7%;
  color: ${({theme}) => theme.COLORS.textColor};
  font-size: ${RFPercentage(2.4)}px;
  text-align: center;
  margin-top: ${RFPercentage(5)}px;
`
export const GraficoContainer = styled(Animatable.View)`
  width: 80%;
  height: 35%;
  align-items: center;
  justify-content: center;
  border-radius: ${RFPercentage(3)}px;
  background-color: ${({ theme }) => theme.COLORS.Quartiary};
`
export const CardImage = styled(Animatable.Image)`
  resize-mode: cover;
  width: 10%;
  margin-left: 1%;
`
export const CardText = styled.Text<Props>`
font-size: ${RFPercentage(2.2)}px ;
`
export const BoxContainer = styled.View`
  width: 90%;
  align-content: center;
  margin-top: 5%;
  margin-bottom: 1%;
  border: 2px solid #ccc;
  border-radius: ${RFPercentage(2.2)}px;
`
export const BoxContainerList = styled.ScrollView`
  width: 90%;
  align-content: center;
`
export const ListContainer = styled(Animatable.View)`
  flex: 1;
  align-items: center;
  padding: ${RFPercentage(1)}px;
`