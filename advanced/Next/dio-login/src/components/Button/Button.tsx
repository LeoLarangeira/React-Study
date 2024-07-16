import { ButtonContainer } from "./styles"
import { FC } from "react"
import { IButton } from "./types"



export const Button: FC<IButton> = ({Title, onClick})  => {
    return(
        <ButtonContainer onClick={onClick}>
            {Title}
        </ButtonContainer>
    )
}