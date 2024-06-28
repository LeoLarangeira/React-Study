import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { Title, Container , CreateText, ForgetText, SubTitleLogin, TitleLogin, Row, Column, Wrapper} from "./style"
import { MdEmail, MdLock } from "react-icons/md"


const Login = () => {
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
                    <form>
                        <Input leftIcon={<MdEmail/>} placeholder="E-mail"/> 
                        <Input leftIcon={<MdLock/>} type="password" placeholder="Senha"/> 
                        <Button title="Entrar" variant="secondary"/>
                    </form>
                    <Row>
                        <ForgetText href="">Esqueci a senha</ForgetText>
                        <CreateText href="">Criar Conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>


    </>
    )
}

export { Login }