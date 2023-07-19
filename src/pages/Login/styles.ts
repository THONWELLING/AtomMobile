import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { RFPercentage } from "react-native-responsive-fontsize";

export const ScrowView = styled.View`
  flex: 1;
  height: 100%;
  
`
export const Image = styled.ImageBackground`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  resize-mode: contain;
  z-index: ${RFPercentage(-10)};
`
export const Container = styled.View`
  width: 100%;
  align-items: center;
  background-color: transparent;
`
export const Logo = styled(Animatable.Image)`
  width: 40%;
  resize-mode: contain;
`
export const H1 = styled(Animatable.Text)`
  color: ${({ theme }) => theme.COLORS.Tertiary};
  font-size: ${RFPercentage(4.3)}px;
  font-weight: bold;
  margin: 1.5% 0;
`
export const H2 = styled(Animatable.Text)`
  color: ${({ theme }) => theme.COLORS.Tertiary};
  font-size: ${RFPercentage(2.3)}px;
  font-style: italic;
`
export const InputArea = styled(Animatable.View)`
  width: 98%;
  padding: 5%;
  margin-top: 4%;
  border-radius: ${RFPercentage(4.3)}px;
  background-color: r${({ theme }) => theme.COLORS.Quartiary};
`
export const SignUpBtnArea = styled(Animatable.View)`
  flex-direction: row;
  margin-vertical: 8%;
`
export const SignUpText = styled.Text`
  font-size: ${RFPercentage(1.9)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.Tertiary};
`
export const SignUpBtnText = styled(Animatable.Text)`
  font-size: ${RFPercentage(2)}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.Primary};
  font-style: italic;
  margin-left: 7%;
`