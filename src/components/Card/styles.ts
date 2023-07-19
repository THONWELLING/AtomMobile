import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

type CardProps = {
  flexDirection: 'column' | 'row'
}

export const Card = styled.View<CardProps>`
  width: 97%;
  min-height: ${RFPercentage(3)}px;
  justify-content: space-around;
  border-radius: ${RFPercentage(3)}px;
  padding: 2%;
  margin-top: 3%;
  background-color: ${({ theme }) => theme.COLORS.Quartiary};
  flex-direction: ${({flexDirection}) => flexDirection};
`