import React from "react";
import { Button } from "../Button";
import { 
    Wrapper,
    Container,
    Input,
    BuscarInputContainer,
    Row,
    MenuRight,
    Menu,
    UserPicture

 } from "./style";
import logo from "../../../assets/dio.svg"

const Header = () =>{
    return(
        <Wrapper> 
            <Container> 
                    <Row>
                        <img src={logo} alt="logo da mia pika"/>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        
                    </Row>

                    <Row>
                        <MenuRight href="a"> Home </MenuRight>
                        <Button title = "Entrar"/>
                        <Button title = "Cadastrar"/>
                        
                    </Row>
            </Container>
        </Wrapper>
    )
 
    
}


export {Header}