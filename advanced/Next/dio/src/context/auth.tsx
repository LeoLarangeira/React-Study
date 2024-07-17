import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProvider, ILoginData } from "./types";
import { IUser } from "../types/users-type";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext<IAuthContext>({} as IAuthContext )



export const AuthContextProvider = ({children} : IAuthContextProvider) => {
    const navigate = useNavigate()
    // const [user, setUser] = useState<IUser>({} as IUser)
    const [user, setUser ] = useState<IUser>({} as IUser)

    const  handleLogin = async (loginData : ILoginData) => {
        try{
            const {data} = await api.get(`users?email=${loginData.email}&senha=${loginData.password}`)
            if(data.length === 1){
                setUser(data[0])
                navigate('/feed')
            }else{
                alert('email ou senha inválidos')
            }
        }
        catch{
            alert("Houve um erro, tente novamente mais tarde")
        }
    }

    return (
        <AuthContext.Provider value={{user, handleLogin}}>
            {children}
         </AuthContext.Provider>
     ) 

}