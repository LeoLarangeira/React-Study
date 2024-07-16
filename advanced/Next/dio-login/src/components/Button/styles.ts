import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  color:  #eee;
  font-weight: 700;
  border: none;
  position: relative; /* Adicionado para garantir que os pseudo-elementos se posicionem corretamente */

  background: #ea4c88;
  background: linear-gradient(0deg, rgba(234, 76, 136, 1) 0%, rgba(234, 76, 136, 1) 100%);

  &:hover {
    color: #ea4c88;
    background: transparent;
    box-shadow: none;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #ea4c88;
    box-shadow:
      -1px -1px 5px 0px #fff,
      7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
    transition: 400ms ease all;
  }

  &::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    transition: 800ms ease all;
  }
`;


