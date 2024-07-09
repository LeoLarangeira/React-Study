import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #ffffff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    border: none;
    margin-right: 5px;
    font-size: 16px;

    &:hover {
    background: #8647AD;
    transition: 0.3s;
    cursor: pointer;
    }
    ${({ variant }) => variant !== "primary" && css`
    min-width: 167px;
    height: 33px;
    background: #e4105d;

    &::after {
      content: '';
      position: absolute;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
    }
    `}
`