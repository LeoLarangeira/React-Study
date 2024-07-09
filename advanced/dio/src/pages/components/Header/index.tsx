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
    UserPicture,
    HomeText

} from "./style";
import logo from "../../../assets/dio.svg"
import { useNavigate } from "react-router-dom";
import { IHeader } from "./types";

const Header = ({ authenticated }: IHeader) => {
    const navigate = useNavigate();
    const loginOnClick = () => {
        navigate("/login")
    }
    const registrationOnClick = () => {
        navigate("/registration")
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da mia pika" />
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>

                </Row>

                <Row>
                    <MenuRight> <HomeText href="/">Home</HomeText> </MenuRight>
                    {authenticated ? (
                        <UserPicture src="https://i.pinimg.com/736x/64/bb/dc/64bbdc11d6a211d5519a07dd13e760cf.jpg"/>
                    ) : (
                        <>
                            <Button variant="primary" onClick={loginOnClick} title="Entrar" />
                            <Button variant="primary" onClick={registrationOnClick} title="Cadastrar" />
                        </>
                    )}

                </Row>
            </Container>
        </Wrapper>
    )


}


export { Header }