import styled, { css } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

type CardGraficoProps ={
  backgroundColor: string
}

export const Container = styled.TouchableOpacity<CardGraficoProps>`
width: 90%;
flex-direction: row;
min-height: ${RFPercentage(2.5)}px;
justify-content: space-between;
align-items: center;
border-radius: ${RFPercentage(3)}px;
padding: .5%;
margin-bottom: 1%;
background-color: ${({backgroundColor, theme }) => backgroundColor || theme.COLORS.Quartiary};
`