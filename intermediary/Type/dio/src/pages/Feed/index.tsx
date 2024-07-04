import React from "react";

import { Card } from "../components/Card/index";
import { UserInfo } from "../components/UserInfo/index";
import { Container, Column, Title, TitleHighlight } from "./style";
import { Header } from "../components/Header/index";

const Feed = () => {
    return (
        <>
            <Header />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>

                <Column flex={1}>
                    <TitleHighlight># RANK TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo progess={20} name="Leo"></UserInfo>
                    <UserInfo progess={50} name="Teste"></UserInfo>
                    <UserInfo progess={62} name="Teste2"></UserInfo>
                    <UserInfo progess={67} name="Teste3"></UserInfo>
                </Column>

            </Container>

        </>
    );
};

export { Feed };
