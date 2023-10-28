import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const TokenContext = createContext()

const TokenProvider =({children})=>{
 let [token,setToken] =useState(localStorage.getItem('token') || "")
 console.log(token)
   const handleToken = (data)=>{
        localStorage.setItem('token',data)
        setToken(data)
    }

    return(
        <TokenContext.Provider value={{token,handleToken}}>
            {children }
        </TokenContext.Provider>
    )


}

export default TokenProvider;