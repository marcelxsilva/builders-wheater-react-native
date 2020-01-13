import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  width: 90%;
  border: 0;
  border-radius: 4px;
  margin: 50px 0px;
  justify-content: space-between;
`;

export const ButtonRefresh = styled.TouchableOpacity`
  font-weight: bold;
  border: 0;
  height:  60px;
  background: rgba(94, 185, 80, 1);
  width: 90%;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
`;
export const ButtonRefreshText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;


export const HeaderWheater = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 70px;
`;

export const Item = styled.Text`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  padding: 5px;
`
export const TextTemp = styled.Text`
  font-size: 90px;
  color: #E6E6FA;
  font-weight: bold;
`
export const Text = styled.Text`
  color: #E6E6FA;
  font-weight: bold;
  font-size: 25px;
`
export const TextClimate = styled.Text`
  color: #E6E6FA;
  font-weight: bold;
  font-size: 40px;
`
export const IconWheater = styled.View`
  padding: 15px;
`
export const ContainerWheater = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`
