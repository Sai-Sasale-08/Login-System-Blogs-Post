import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from "js-cookie"

const PrivetRoute = ({children}) => {

  const token= Cookies.get("acess_token")
  if(!token){
    return <Navigate to={"/login"}/>
  }
  return children;
}

export default PrivetRoute
