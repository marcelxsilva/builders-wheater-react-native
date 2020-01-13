import React from 'react';
import { Container, ButtonRefresh, ButtonRefreshText, HeaderWheather, TextTemp, Text, TextClimate } from './styles';

export default function Wheather() {
  return (
    <>
      <Container>
        <HeaderWheather>

          <TextTemp>25º</TextTemp>
        </HeaderWheather>

        <TextClimate >Nublado</TextClimate>
        <Text >Taboão da Serra</Text>
      </Container>

      <ButtonRefresh>
        <ButtonRefreshText>Atualizar</ButtonRefreshText>
      </ButtonRefresh>
    </>
  );
}
