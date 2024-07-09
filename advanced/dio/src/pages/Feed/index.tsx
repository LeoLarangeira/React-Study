import React, { useState } from "react";

import { Card } from "../components/Card/index";
import { UserInfo } from "../components/UserInfo/index";
import { Container, Column, Title, TitleHighlight } from "./style";
import { Header } from "../components/Header/index";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";


// create authenticaded 


const Feed = () => {
    const [userFeed , setUserFeed] = useState(true);

    const {user} = useContext(AuthContext)
    return (
        <>
            <Header authenticated={true}/>
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
                    <UserInfo progess={20} name={user.name}></UserInfo>
                    <UserInfo progess={50} name={user.name}></UserInfo>
                    <UserInfo progess={62} name={user.name}></UserInfo>
                    <UserInfo progess={67} name={user.name}></UserInfo>
                </Column>

            </Container>

        </>
    );
};

export { Feed };
