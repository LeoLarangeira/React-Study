import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Title, Container, TitleHightLight, TextContent } from "./style"
import { useNavigate } from "react-router-dom"





//isso <> </> é um fragmento, ele é usado quando você precisa retornar varios elemento
const Home = () => {
    const navigate = useNavigate();

    const handleSignin = () =>{
        navigate('/login')
    }
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHightLight>
                        Implemente
                        <br />
                    </TitleHightLight>
                    o seu futuro agora
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundoi e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts
                </TextContent>
                <Button title="Começar Agora" variant="secondary" onClick={handleSignin}></Button>
            </div>
            <div>
                <img src="" alt="happy-people"/>
            </div>
        </Container>


    </>
    )
}

export { Home }