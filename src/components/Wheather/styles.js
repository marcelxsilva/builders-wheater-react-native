import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 90%;
  border: 0;
  border-radius: 4px;
  margin: 50px 0px;
`;

export const ButtonRefresh = styled.TouchableOpacity`
  font-weight: bold;
  border: 0;
  background: rgba(94, 185, 80, 1);
  width: 90%;
  margin: -30px 0 30px;
  border-radius: 4px;

`;
export const ButtonRefreshText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  padding: 10px 5px;
`;


export const HeaderWheather = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const Item = styled.Text`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  padding: 5px;
`
export const TextTemp = styled.Text`
  font-size: 75px;
  color: #E6E6FA;
  font-weight: bold;
`
export const Text = styled.Text`
  color: #E6E6FA;
  font-weight: bold;
`
export const TextClimate = styled.Text`
  color: #E6E6FA;
  font-weight: bold;
  font-size: 30px;
`
