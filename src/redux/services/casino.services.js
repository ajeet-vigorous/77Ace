
import { apiCall } from "../../config/HTTP";
import { getDecryptedItem, setEncryptedItem } from "../../config/localStoresHide";

async function casinoBetPlaceFunc(data) {
  try {
    const user = await apiCall("POST", "casino/casinoBetPlace", data);

  return user
  } catch (error) {
    console.error("Casino Bet Place error:", error);
    return Promise.reject(error);
  }
}


async function intCasinoCateogeoryWiseList(data) {
  try {
    const response = await apiCall("POST", "website/getCateogeory", data);
    if(response){
      setEncryptedItem("0x13", (response?.data));
    }
  return response
  } catch (error) {
    console.error("Casino Bet Place error:", error);
    return Promise.reject(error);
  }
}

async function getCasinoByCategory(data) {
  try {
    const response = await apiCall("POST", "website/getCasinoListByCateogeory", data);
    if(response){
      setEncryptedItem("getCasinoListByCateogeory", (response?.data));
    }
  return response
  } catch (error) {
    console.error("Casino Bet Place error:", error);
    return Promise.reject(error);
  }
}



async function intGrupCsnoList(data) {
  try {
    const response = await apiCall("POST", "website/getInternationalGroupCasinoList", data);
    if(response){
      setEncryptedItem("intGrupCsnoList", (response?.data));
      
    }

  return response
  } catch (error) {
    console.error("Casino Bet Place error:", error);
    return Promise.reject(error);
  }
}

async function getCasinoLoginUrl(data) {
  try {
    const response = await apiCall("POST", "user/casinoLoginUrl", data);
    return response;
  } catch (error) {
    console.error("Casino Login error:", error);
    return Promise.reject(error);
  }
}



export const casinoServices = {
  casinoBetPlaceFunc,
  intCasinoCateogeoryWiseList,
  intGrupCsnoList,
  getCasinoLoginUrl,
  getCasinoByCategory

};