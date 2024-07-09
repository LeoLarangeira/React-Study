import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import {
  PostInfo,
  UserPicture,
  UserInfo,
  Content,
  ImageBackground,
  CardContainer,
  HasInfo,
} from "./style";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://i.pinimg.com/originals/92/1a/c3/921ac332715f9ecb9f50155427aa8ffc.jpg"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://i.pinimg.com/736x/64/bb/dc/64bbdc11d6a211d5519a07dd13e760cf.jpg"/>
          <div>
            <h4>Leonardo Larangeira</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <div>
          <h4>Projeto para o curso de React</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam mollitia tempora eligendi, veritatis soluta esse dolorem et ipsa alias voluptas quas doloremque qui dolores veniam recusandae aperiam quam enim.<strong>Saiba Mais</strong></p>
          </div>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #JS </h4>
            <p>
                <FiThumbsUp />
            </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
