import { observer } from "mobx-react-lite";
import PublicLayout from "./main-layout/public-layout";
import PrivateLayout from "./main-layout/private-layout";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { constRoute } from "@utils/route";
import { useStore } from "@stores/root-store";
import { JWT_AUTH_ACCESS_TOKEN } from "@utils/constants/important";
const DefaultLayout = observer(() => {
  const navigate = useNavigate()
  const location = useLocation();
 const [isToken, setIsToken] = useState(localStorage.getItem(JWT_AUTH_ACCESS_TOKEN))
 const {
  user: {loadUserInfo, getCurrentUserData },
} = useStore(null);
  useEffect(() => {
    if (localStorage.getItem(JWT_AUTH_ACCESS_TOKEN)?.length > 0) {
      setIsToken(localStorage.getItem(JWT_AUTH_ACCESS_TOKEN))
    } else { 
      if(!location.pathname?.includes(constRoute.login)){
        localStorage.removeItem(JWT_AUTH_ACCESS_TOKEN)
        navigate(constRoute?.home)
        setIsToken("")
      }
    }
  }, [localStorage.getItem(JWT_AUTH_ACCESS_TOKEN)])
  
  useEffect(() => {
    navigate(constRoute?.incomeTaxReturn)
  }, [])
  
  
  const handleLoadUserInfoDetal=async()=>{
    await loadUserInfo(navigate) 
   }
 useEffect(()=>{ 
  if(!location.pathname?.includes(constRoute.login)&& location.pathname!=='/') handleLoadUserInfoDetal()
 }, [navigate])
  return !(isToken) && <PublicLayout /> || <PrivateLayout /> ;
});
export default DefaultLayout;
