import React from 'react';
import { Container, Text } from './styles';
import Wheather from '../../components/Wheater';

import { ImageBackground } from 'react-native';
import image from '../../assets/background.png';

export default function Main() {
  return (
    <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
      <Container>
        <Text>Builders Wheater</Text>
        <Wheather />
      </Container>
    </ImageBackground>
  );
}
