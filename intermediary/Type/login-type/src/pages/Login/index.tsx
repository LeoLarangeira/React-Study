import { useForm } from "react-hook-form";
import Button from "../../Components/Button"
import Input from "../../Components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { useState } from "react";

const schema = yup
    .object({
        email: yup.string().email("E-mail invalido").required("Campo Obrigatorio"),
        password: yup
            .string()
            .min(6, "No minimo 6 caracteres")
            .required("Campo Obrigatorio")
    })
    .required();


const Login = () => {
    const [isClickabel, setIsClickable] = useState(true);

    const { control, formState: { errors, isValid },
    } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues,
        reValidateMode: "onChange"
    });
    console.log("valido? " ,isValid)
    console.log("clicavel", isClickabel)
    const validation  = () => {
        if(isValid === false){
           //aqui eu deveria setar a propriedade para ser clicavel para false ou disabled 
        }else{
          //aqui eu deveria colocar para ele poder ser clicado normalmente 
        }
    }
    return(
        <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar" isValid={isValid} />
        </Column>
      </LoginContainer>
    </Container>
    );

};

export default Login;