import { useState, createContext } from "react";

interface IAppContext{
    user : string,
    isLoggedIn : boolean, 
    setIsloogedIn : (isLoggedIn : boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = (({children} : any) => {
    const [isLoggedIn, setIsloogedIn] = useState<boolean>(false)

    const user = "Leo"

    return(
        <AppContext.Provider value = {{user, isLoggedIn, setIsloogedIn}}>
            { children }
        </AppContext.Provider>
    )
})