import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    border: none;
    margin-right: 5px;
    font-size: 16px;
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #E4105D;

        &::after {
            content: '';
            border: none;
            position: absolute;
            font-size: 16px;

            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`