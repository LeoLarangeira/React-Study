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
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate();
    const loginOnClick = () =>{
        navigate("/login")
    }
    const registrationOnClick = () => {
        navigate("/registration")
    }

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
                        <MenuRight href="/home"> Home </MenuRight>
                        <Button variant="primary" onClick={loginOnClick} title = "Entrar"/>
                        <Button variant="primary" onClick={registrationOnClick} title = "Cadastrar"/>
                        
                    </Row>
            </Container>
        </Wrapper>
    )
 
    
}


export {Header}