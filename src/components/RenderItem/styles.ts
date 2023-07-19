import styled, { css } from "styled-components/native";
import { Text as RNText, TextProps as RNTextProps } from 'react-native';


type TextProps = {
  fontSize?: number
  color?: string
  bold?: boolean
  italic?: boolean
  stretch?: boolean
  posicao?: string
}

export const RowContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const StyledText = styled(RNText)<TextProps>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color || 'black'};
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}
  ${(props) =>
    props.stretch &&
    css`
      align-self: stretch;
    `}
`

export const PosicaoText = styled(StyledText)<TextProps>`
  text-shadow: 1px 1px 2px #141414;
`