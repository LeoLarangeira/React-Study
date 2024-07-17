import { IUser } from "../types/users-type";

export interface IAuthContext{
    user : IUser; 
    handleLogin : (loginData : ILoginData )  => Promise<void> ; 
}

export interface IAuthContextProvider{
    children : React.ReactNode
}

export interface ILoginData{
    email : string; 
    password : string ; 
}