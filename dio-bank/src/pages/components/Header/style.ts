import styled from "styled-components";


export const ButtonContainer = styled.button`
    width: 130px; 
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;
    background: rgb(255,27,0);
    background: linear-gradient(0deg, rgba(255,27,0,1) 0%, rgba(251,75,2,1) 100%);

    &::hover{
        color: #f0094a;
        background: transparent;
        box-shadow:none;
    }

    &::before, 
    &::after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: #f0094a;
        box-shadow:
        -1px -1px 5px 0px #fff,
        7px 7px 20px 0px #0003,
        4px 4px 5px 0px #0002;
        transition:400ms ease all;
    }
    &::after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    &:hover:before,
    &:hover:after{
        width:100%;
        transition:800ms ease all;
    }
`


