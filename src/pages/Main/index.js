import React from 'react';
import { Container, Text } from './styles';
import Wheather from '../../components/Wheather';

export default function Main() {
  return (
    <Container>
      <Text>Wheather</Text>
      <Wheather />
    </Container>
  );
}
