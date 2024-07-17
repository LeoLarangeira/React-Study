import React from "react";

import { Container, UserPicture, NameText, Progress } from "./style"
import { IUserInfo } from "./types";

//so, we can make the user img as a var;
const UserInfo = ({ name, progess } : IUserInfo) => {
    return (
        <Container>
            <UserPicture src="https://i.pinimg.com/736x/64/bb/dc/64bbdc11d6a211d5519a07dd13e760cf.jpg" />
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={progess}></Progress>
            </div>
        </Container>
    )
}

export { UserInfo }