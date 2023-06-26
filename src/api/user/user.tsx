import { getAuthorizationHeader } from "../common-utils";
import axios from "axios";
import { baseUrl } from "../const";
import { BaseApi } from "../baseApi";

class UserApi extends BaseApi {

  onUserLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}signin`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        cancelToken: this.cancelToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  getCurrentUserDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}getCurrent`, {
        headers: { Authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
}

export default UserApi;
