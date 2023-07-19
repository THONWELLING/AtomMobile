import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";


interface InputContainerProps {
  isFocused: boolean
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 2%;
`;

export const Label = styled.Text`
  margin-bottom: 2%;
  margin-left: 7%;
  font-size: ${RFPercentage(2.2)}px;
  font-weight: 300;
  color: ${({theme}) => theme.COLORS.textColor};
  font-style: italic;
`;

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-radius: ${RFPercentage(50)}px;
  padding: 1% 4.7%;
  border: ${RFPercentage(0.22)}px solid ${({ isFocused }) => isFocused ? '#F2B05E' : '#F28F16'};
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: ${RFPercentage(2.2)}px;
  color: ${({theme}) => theme.COLORS.Tertiary};
  padding: 1%;
`;