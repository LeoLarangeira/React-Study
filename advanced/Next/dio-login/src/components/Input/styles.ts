import styled from "styled-components"

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px; 
    color: #eee
    

    display: flex; 
    align-items: center; 
    margin-bottom: 20px;
    &:hover {
        border-color: #ea4c88;
    }
`


export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    width: calc(100% - 20px); 
    padding: 8px;
    color: #eee
    margin-bottom: 15px;
    border: 1px solid #ea4c88;
    border-radius: 5px;
    outline: none; 
    
    &:hover {
        border-color: #ea4c88;
    }
`