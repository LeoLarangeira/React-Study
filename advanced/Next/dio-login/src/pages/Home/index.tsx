import LeftBar from "../../components/LeftBar"
import { Container, LeftBlock, RightBlock } from "./styles"


export const Home = () => {
    return(
        <Container>
            <LeftBlock>
                <LeftBar />
            </LeftBlock>
            <RightBlock>
                <p>Testado</p>
            </RightBlock>
        </Container>
    )
}