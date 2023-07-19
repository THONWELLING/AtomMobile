import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";


export const LoadingArea = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.Secondary};
`
export const Logo = styled.Image`
  width: 97%;
  height: 22%;
  resize-mode: contain; 
`
export const LoadingText = styled.Text`
  font-size: ${RFPercentage(3)}px;
  font-style: italic;
  margin-vertical: ${RFPercentage(4)}px;
  color: ${({ theme }) => theme.COLORS.textColor};
`