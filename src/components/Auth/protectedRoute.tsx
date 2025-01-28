import cookieApi from "@/utilits/cookieApi"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

interface IProps{
    role:"auth" | "guest",
    redirect:string,
    page:ReactNode
}
const ProtectedRoute = ({role, redirect, page}:IProps) => {
    const jwt = cookieApi.get('jwt')
    if(role == 'auth')
    {
        if(jwt)
            return page
        return <Navigate to={redirect}/>
    }else{
        if(jwt)
            return <Navigate to={redirect}/>
        return page
    }
}

export default ProtectedRoute