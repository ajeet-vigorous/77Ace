import { apiCall } from "../../config/HTTP";
import { getDecryptedItem, setEncryptedItem } from "../../config/localStoresHide";

async function getSportmatchList(data) {
    try {
        const response = await apiCall("POST", "sports/matchList", data);
        if (response) {
            const matchList = response?.data && Object.keys(response?.data).length > 0 ? response?.data : [];
            setEncryptedItem("0x04", (matchList));
            return response;
          }
    } catch (error) {
      console.error("Sport Match List", error);
      return Promise.reject(error);
    }
  }

async function casinoLogin(data) {
    try {
        const response = await apiCall("POST", "user/casinoLoginUrl", data);
        if (response) {
            return response;
          }
    } catch (error) {
      console.error("user Statement List", error);
      return Promise.reject(error);
    }
  }


  export const sportServices = {
    getSportmatchList,
    casinoLogin
  }