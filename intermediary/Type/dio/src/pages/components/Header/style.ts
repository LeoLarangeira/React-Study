import styled from "styled-components";


export const Container = styled.div`
    width: 100%; 
    max-width: 80%; 
    height: 47px; 

    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin: 0 auto;
`


export const Row = styled.div`
    display: flex; 
    flex-direction: row;  
    align-items: center;

`

export const Column = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 

`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%; 
    height: 47px; 
    display: flex; 
    justify-content: center; 
    align-items: center;


`

export const BuscarInputContainer = styled.div`
    width: 175px; 
    height: 30px; 
    background: #202037; 
    border-radius: 8px;
    font-size: 16px; 
    padding: 2px 5px; 
    margin: 0 12px;  
`


export const Menu = styled.div`
    font-family: "Open Sans", 
    font-style: normal;  
    font-size: 16px; 
    line-height: 25px; 
    color: white; 
    margin-right: 12px; 
    text-decoration: none; 

`


export const MenuRight = styled.div`
    font-family: "Open Sans", 
    font-style: normal;  
    font-size: 16px; 
    line-height: 25px; 
    color: white; 
    margin-right: 15px; 
    text-decoration: none; 

`

export const UserPicture = styled.img`
    width: 32px; 
    height: 32px; 
    border-radius: 22px; 
    border: 2px solid white; 

`

export const Input = styled.input`
    background:transparent; 
    flex: 1; 
    border: 0; 
    color: white;
    height: 100%; 
    widht: 100%;
`