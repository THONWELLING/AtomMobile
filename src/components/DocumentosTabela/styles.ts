import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { RFPercentage } from 'react-native-responsive-fontsize';

type Props = {
  color?: string
  width?: string
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  min-height: ${RFPercentage(3)}px;
  justify-content: space-between;
  align-items: center;
  border-radius: ${RFPercentage(3)}px;
  padding: 1.5%;
  margin-bottom: 1%;
  background-color: ${({ theme }) => theme.COLORS.Quartiary};
`
export const CardImage = styled(Animatable.Image)`
  resize-mode: contain;
  width: 10%;
  margin-left:1%;
`
export const CardText = styled.Text<Props>`
  font-size: ${RFPercentage(2)}px;
`