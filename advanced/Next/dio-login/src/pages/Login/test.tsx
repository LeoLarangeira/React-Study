// Importe as bibliotecas necessárias
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('should display alert when button is clicked', () => {
    // Renderize o componente
    const { getByText } = render(<Login />);

    // Encontre o botão pelo seu título
    const button = getByText('SIGN UP');

    // Simule um clique no botão
    fireEvent.click(button);

    // Verifique se o alerta foi exibido
    expect(window.alert).toHaveBeenCalledWith('Salve Cachorro');
  });
});