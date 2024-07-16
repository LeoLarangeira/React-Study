import { InputContainer, InputText } from "./styles"


interface IInput{
    placeholder: string;    
    type: string; 
}


export const Input : React.FC <IInput> = ({placeholder, type}) =>{
    return (
        <>
            <InputContainer>
                <InputText placeholder={placeholder} type={type}></InputText>
            </InputContainer>
        </>
    )
}