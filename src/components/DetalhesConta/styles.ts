import styled, { css } from 'styled-components/native';
import * as Animatable from'react-native-animatable';
import { RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../theme';

type TextProps = {
  bold?: boolean
  italic?: boolean 
}

export const DetalhesContaContainer = styled(Animatable.View)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.Secondary};
  padding: ${RFPercentage(3)}px;
`
export const DetalhesArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const DetalhesPosicao = styled.View`
  width: 40%;
  align-items: center;
`
export const DetalhesContaLabel = styled(Animatable.Text)`
  color: ${({ theme }) => theme.COLORS.textColor};
  margin-bottom: ${RFPercentage(1)}px;
  margin-top: ${RFPercentage(1)}px;
  `
  export const DetalhesContaValue = styled(Animatable.Text)<TextProps>`
  margin-bottom: ${RFPercentage(1)}px;
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.COLORS.textColor};
  `
  export const AnimatedValue = styled(Animatable.Text)<{ isExpired: boolean }>`
  color: ${({ isExpired }) => (isExpired ? 'red' : theme.COLORS.textColor)};
  `

  export const DanfeArea = styled.TouchableOpacity`
    flex: 1;
  `
  export const DetalhesBuscar = styled(Animatable.Image)`
  margin-top: ${RFPercentage(1)}px;
  resize-mode: stretch;
`
export const DetalhesPdf = styled.ScrollView`
  width: 100%;
  height: 90%;
  background-color: ${({ theme }) => theme.COLORS.Transparency};
`