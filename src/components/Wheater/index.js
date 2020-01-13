import React from 'react';
import { Container, ButtonRefresh, ButtonRefreshText, HeaderWheater, TextTemp, Text, TextClimate, IconWheater } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function Wheater() {
  return (
    <>
      <Container>
        <HeaderWheater>
          <IconWheater>
            <Icon name="cloud" size={90} color="#fff" />
          </IconWheater>
          <TextTemp>25º</TextTemp>
        </HeaderWheater>

        <TextClimate >Nublado</TextClimate>
        <Text >Taboão da Serra</Text>
      </Container>

      <ButtonRefresh>
        <ButtonRefreshText>Atualizar</ButtonRefreshText>
      </ButtonRefresh>
    </>
  );
}
