import styled from 'styled-components/native';

interface TouchableProps {
  borderColor: string;
}


export const Container = styled.View`
  margin-left: 15px;
`
export const OptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 7px;
`
export const OptionText = styled.Text`
  margin-left: 15px;
  color: #555;
  font-size: 16px;
  font-weight: 600;
`
export const Touchable = styled.TouchableOpacity<TouchableProps>`
  height: 22px;
  width: 22px;
  border-radius: 4px;
  border-width: 1.5px;
  border-color: ${props => props.borderColor};
  justify-content: center;
  align-items: center;
`