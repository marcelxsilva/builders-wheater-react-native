import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import GetLocation from 'react-native-get-location';
import Icon from 'react-native-vector-icons/Feather';
import api from '~/services/api';
import {
  Container,
  ButtonRefresh,
  ButtonRefreshText,
  HeaderWheater,
  TextTemp,
  Text,
  TextClimate,
  IconWheater,
  ContainerWheater
} from './styles';

export default function Wheater() {
  const [loading, setLoading] = useState(false);
  const [dataWheater, setDataWheater] = useState({
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    description: '',
    name: ''
  });

  useEffect(() => {
    getInformationByWheater()
  }, []);

  async function getInformationByWheater() {
    setLoading(true);
    const { longitude, latitude } = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });
    const response = await api.get(`weather?lat=${latitude}&lon=${longitude}&&units=metric&lang=pt_br&APPID=258ec2363a588168ca12e5cbed53e40e`)
    const { main: { temp, temp_min, temp_max, humidity }, name, weather } = response.data;
    setDataWheater({ temp, temp_min, temp_max, humidity, description: weather[0].description, name })
    setLoading(false);
  }

  return (
    <>
      <Container>
        <HeaderWheater>
          <IconWheater>
            <Icon name="cloud" size={90} color="#fff" />
          </IconWheater>
          <TextTemp>{dataWheater.temp ^ 0}º</TextTemp>
        </HeaderWheater>

        <ContainerWheater>
          <View>
            <Text>Min.</Text>
            <TextTemp style={{ fontSize: 60 }}>{dataWheater.temp_min}º</TextTemp>
          </View>

          <View>
            <Text>Max.</Text>
            <TextTemp style={{ fontSize: 60 }}>{dataWheater.temp_max}º</TextTemp>
          </View>

          <View>
            <Text>Umidade</Text>
            <TextTemp style={{ fontSize: 60 }}>{dataWheater.humidity}%</TextTemp>
          </View>
        </ContainerWheater>

        <TextClimate >{dataWheater.description.toUpperCase()}</TextClimate>
        <Text >{dataWheater.name}</Text>
      </Container>

      <ButtonRefresh onPress={() => {
        setLoading(true);
        getInformationByWheater();
      }}>
        {loading
          ? <ActivityIndicator size='large' color='#fff' />
          : <ButtonRefreshText>Atualizar</ButtonRefreshText>}
      </ButtonRefresh>
    </>
  );
}
