import React from 'react';
import { Container } from './styles'


export default function Modal({ children }) {

  return (
    <>
      <Container>
        {children}
      </Container>
    </>
  )
}
