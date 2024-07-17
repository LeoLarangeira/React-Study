import React from "react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { Title, FootNote, Container, CreateText, ForgetText, SubTitleLogin, TitleLogin, Row, Column, Wrapper, AccountText } from "./style"



interface IRegistration{
    name : string, 
    password: string, 
    email : string
}

const schema = yup
    .object({
        name: yup.string().min(10, "No minímo 10 letras").required("Campo Obrigatório"),
        email: yup.string().email("Email não é válido").required("Campo Obrigatório"),
        password: yup.string().min(4, 'No minimo 4 chars').required("Campo Obrigatório"),
    })
    .required()


const Registration = () => {
    const navigate = useNavigate();
    // formState possui varios outros methods incluidos nele 
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IRegistration>(
        {
            resolver: yupResolver(schema),
            mode: "onChange"
        }
    )
    console.log(isValid, errors)

    const onSubmit : SubmitHandler<IRegistration> = async (formData: IRegistration) => {
            try{
                const {data} = await api.post("/users", {
                    name: formData.name,
                    email: formData.email,  
                    password: formData.password
                }
            )
            navigate("/feed")
            }catch(e){
                console.error(e);
            }


    }


    return (<>
        <Header authenticated={false}/>
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.               
                 </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.name?.message} controlInput={control} leftIcon={<MdAccountCircle color="#8647AD" />} defaultValue="" type="name" placeholder="Nome" />
                        <Input name="email" errorMessage={errors?.email?.message} controlInput={control} leftIcon={<MdEmail color="#8647AD" />} defaultValue="" type="email" placeholder="E-mail" />
                        <Input name="password" errorMessage={errors?.password?.message} controlInput={control} leftIcon={<MdLock color="#8647AD" />} defaultValue="" type="password" placeholder="Senha" />
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <FootNote>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</FootNote>
                        <Column>
                            <Row>
                                <AccountText>Já tenho conta.<a href="/login"> Fazer Login </a></AccountText>
                            </Row>
                        </Column>
                </Wrapper>

            </Column>
        </Container>


    </>
    )
}

export { Registration }