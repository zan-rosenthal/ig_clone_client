import React from 'react'
import { Header as NBHeader, Left, Title, Right, Body } from 'native-base'

export default function Header({ text }) {
  return (
    <NBHeader>
      <Left />
      <Body>
        <Title>{text}</Title>
      </Body>
      <Right />
    </NBHeader>
  )
}