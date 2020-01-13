import React, { useState } from 'react';
import { Container, ButtonRefresh, ButtonRefreshText, HeaderWheater, TextTemp, Text, TextClimate, IconWheater, ContainerWheater } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import { View, ActivityIndicator } from 'react-native'
export default function Wheater() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Container>
        <HeaderWheater>
          <IconWheater>
            <Icon name="cloud" size={90} color="#fff" />
          </IconWheater>
          <TextTemp>25º</TextTemp>
        </HeaderWheater>

        <ContainerWheater>
          <View>
            <Text>Min.</Text>
            <TextTemp style={{ fontSize: 60 }}>25º</TextTemp>
          </View>

          <View>
            <Text>Max.</Text>
            <TextTemp style={{ fontSize: 60 }}>25º</TextTemp>
          </View>

          <View>
            <Text>Umidade</Text>
            <TextTemp style={{ fontSize: 60 }}>25º</TextTemp>
          </View>
        </ContainerWheater>

        <TextClimate >Nublado</TextClimate>
        <Text >Taboão da Serra</Text>
      </Container>

      <ButtonRefresh onPress={() => setLoading(true)}>
        {loading
          ? <ActivityIndicator size='large' color='#fff' />
          : <ButtonRefreshText>Atualizar</ButtonRefreshText>}
      </ButtonRefresh>
    </>
  );
}
