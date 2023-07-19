import { AuthMobileContext } from "../contexts/AuthMobileContext"
import React, { useContext } from "react"
import AuthRoute from "./auth.routes"
import DrawerRoutes from "./drawer.routes"
import Loading from "../components/Loading"


const Routes =()=> {
  const { isAuthenticated, loadingAuth } = useContext(AuthMobileContext)

  if (loadingAuth) {
    return( <Loading /> )
  }
  
  return(
    isAuthenticated ? <DrawerRoutes cod_tela={0} /> : <AuthRoute />
  )
}
export default Routes