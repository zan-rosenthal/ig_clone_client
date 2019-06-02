import React from 'react'
import { Container, Content, Footer, Text } from 'native-base';
import Header from 'components/Header'

export default function ImageDetail() {
  return (
    <Container>
      <Header text="ImageTitle" />
      <Content>
        <Text>An image detail here for ya</Text>
      </Content>
      <Footer></Footer>
    </Container>
  )
}