import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable';
import { RFPercentage } from "react-native-responsive-fontsize";


export const Container = styled(Animatable.View)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.Secondary};
  justify-content: center;
  align-items: center;
`
export const Text = styled(Animatable.Text)`
  font-size: ${RFPercentage(3)}px;
  color: ${({ theme }) => theme.COLORS.textColor};

`