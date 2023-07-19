import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { RFPercentage } from 'react-native-responsive-fontsize';


export const ScrollView = styled.SafeAreaView`
  flex: 1;
  height: 100%;
`
export const Image = styled.ImageBackground`
position: absolute;
width: 100%;
height: 87%;
resize-mode: contain;
z-index: ${RFPercentage(-10)};
`

export const Top = styled(Animatable.View)`
  width: 100%;
  min-height: 7%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Sair = styled.TouchableOpacity`
  width: auto;
  height: 53%;
  padding-horizontal: 2.7%;
  border-radius: ${RFPercentage(2)}px;
  background-color: ${({ theme }) => theme.COLORS.Primary};
  align-self: center;
`

export const Container = styled.View`
  width: 100%;
  align-items: center;
  background-color: transparent;  
`
export const List = styled.View`
  width: 97%;
  height: 100%;
`
export const ButtonText = styled.Text`
  align-self: center;
  color: ${({ theme }) => theme.COLORS.textColor};
  font-size: ${RFPercentage(2.2)}px;
  font-style: italic;
`

export const TotalMoviesText = styled.Text`
  color: ${({ theme }) => theme.COLORS.textColor};
  font-size: ${RFPercentage(2.2)}px;
  text-align: center;
  margin-vertical: ${RFPercentage(2)}px;
`