export interface IButton{
    title: string,
    type?: string,  
    variant? : string, 
    onClick? : () => void,
}


export interface IButtonStyled{
    variant : string,
}