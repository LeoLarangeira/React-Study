import styled from 'styled-components'; 

export const ButtonContainer = styled.button<{disabled?: boolean}>`
  width: 100%;
  height: 42px;
  background-color: ${({ disabled }) => (disabled ? 'gray' : '#81259D')};
  color: #FFF; 

  border: 1px solid #81259D; 
  border-radius: 21px; 

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover{
    opacity: 0.6; 
    cursor: pointer;
    background-color: ${({ disabled }) => (disabled ? 'gray' : '#81259D')};
  }


`
