import React from "react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { MdEmail, MdLock } from "react-icons/md"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { Title, ErrorText, Container, CreateText, ForgetText, SubTitleLogin, TitleLogin, Row, Column, Wrapper } from "./style"





const schema = yup
    .object({
        email: yup.string().email("Email não é válido").required("Campo Obrigatório"),
        password: yup.string().min(4, 'No minimo 4 chars').required("Campo Obrigatório"),
    })
    .required()


const Login = () => {
    const navigate = useNavigate();
    // formState possui varios outros methods incluidos nele 
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm(
        {
            resolver: yupResolver(schema),
            mode: "onChange"
        }
    )
    console.log(isValid, errors)

    const onSubmit = async formData => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('email ou senha inválidos')
            }
        }
        catch{
            alert("Houve um erro, tente novamente mais tarde")
        }
    }


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você parender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin>Faça o seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça o seu login and make the change...</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} leftIcon={<MdEmail color = "#8647AD"/>} defaultValue="" type="email" placeholder="E-mail" />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} leftIcon={<MdLock color = "#8647AD"/>} defaultValue="" type="password" placeholder="Senha" />
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <ForgetText href="/">Esqueci a senha</ForgetText>
                        <CreateText href="/login">Criar Conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>


    </>
    )
}

export { Login }