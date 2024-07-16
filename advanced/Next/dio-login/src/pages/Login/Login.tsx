import React, { FC } from 'react';

import { Button } from '../../components/Button/Button';
import { Column, Container,  GridLayout, Title } from './styles';
import { Input } from '../../components/Input/Input';
import Header from '../../components/Header/Header';

const Login: React.FC = () => {
  const alertFunction = () => {
    alert('Salve Cachorro')
  }

  return (
    <>
    <Header/>
    <Container>
      <GridLayout>
            <Title>Bem-Vindo de Volta!</Title>
            <Input placeholder='E-mail' type='email'/>
            <Input placeholder='Senha' type='password'/>
            <Button Title='SIGN UP' onClick={alertFunction}></Button>
      </GridLayout>
    </Container>
    </>
  );
}

export default Login;