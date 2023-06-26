import { flow, types } from "mobx-state-tree";
import { userApi } from "../../api";
import { notification } from "../../utils/notifications";
import { constRoute } from "@utils/route";
import { catchError, onLogOutClearAll } from "@utils/common-functions";
import {
  currentUserModel,
  userInfoModel,
} from "@stores/store-utils";
import { toJS } from "mobx";
import { JWT_AUTH_ACCESS_TOKEN } from "@utils/constants/important";
export const user = types

  .model({
    userInfo: types.maybeNull(userInfoModel),
    loading: types.optional(types.boolean, false),    
    loadingLogin: types.optional(types.boolean, false),    
    loadingCurrentUser: types.optional(types.boolean, false), 
    currentUserData: types.maybeNull(currentUserModel),
  })
  .views((self) => ({
    get getUserInfo() {
      return toJS(self.userInfo);
    },
    get isLoadingLogin() {
      return toJS(self.loadingLogin);
    },
    get getCurrentUserData(){
      return toJS(self.currentUserData)
    },
  }))
  .actions((self) => {
    const onUserLogin = flow(function* (data, navigate) {
      self.loadingLogin = true;
      try {
        const res = yield userApi.onUserLogin(data);
          localStorage.setItem(JWT_AUTH_ACCESS_TOKEN, res?.jwt_token);
          if(res?.jwt_token){
           loadUserInfo().then((data) => {
            if(data?.data?.error?.includes('Invalid token') || data?.data?.error?.includes('Token has expired')){
              catchError(data, "loadUserInfo");  
              navigate(`${constRoute.login}`);
            } else{
              notification.success("Signed in successfully");
              navigate(`${constRoute.home}`);
            }
          });
         
      }
      } catch (error) {
        catchError(error, "onUserLogin");
      } finally {
        self.loadingLogin = false;
      }
    });

    const loadUserInfo = flow(function* (navigate = null) {
      self.loadingCurrentUser = true;
      let response = null;
      try {
        self.loadingCurrentUser = true;
        const res = yield userApi.getCurrentUserDetails();
        response = res;
        self.currentUserData = res;
      } catch (error) {
        catchError(error, "loadUserInfo");
        response = error.response;
        if (error?.response?.data?.error?.includes('Invalid token') || error?.response?.data?.error?.includes('Token has expired')) {
          onLogOutClearAll(navigate);
        }
      } finally {
        self.loadingCurrentUser = false;
        return response;
      }
    });
   
    return {
      onUserLogin,
      loadUserInfo,
    };
  });

export function initUser() {
  return user.create({});
}
