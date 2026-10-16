import { apiCall, apiCallForm } from "../../config/HTTP";
import { getDecryptedItem, setEncryptedItem } from "../../config/localStoresHide";

async function getUserStatement(data) {
    try {
        const response = await apiCall("POST", "user/userStatement", data);
        if (response) {
            return response;
          }
    } catch (error) {
      console.error("user Statement List", error);
      return Promise.reject(error);
    }
  }




  async function getUserBalance (data) {
    try {
      const user = await apiCall("POST", "user/userBalance", data);
  
      if (user) {
  
        setEncryptedItem("0x05", (+user?.data?.coins));
        setEncryptedItem("0x11", (+user?.data?.exposure));
        setEncryptedItem("0x12", (+user?.data?.profitLoss));
        return user;
      }
    } catch (error) {
      console.error("Domain setting error:", error);
      return Promise.reject(error);
    }
  }


  async function getBankDetailsByUserId () {
    try {
      const user = await apiCall("POST", "website/getBankDetailsByUserId");
  
      if (user) {
  
        return user;
      }
    } catch (error) {
      console.error("User Bank Details error:", error);
      return Promise.reject(error);
    }
  }

  async function getDomainSettings (data) {
    const clientdomainSetting = getDecryptedItem("0x02");
    let user;
    try {
      if(clientdomainSetting){
        user = clientdomainSetting;
      }
      else{
        const response = await apiCall("POST", "website/domainSettingByDomainName",data);
        setEncryptedItem("0x02", (response.data));
        user = response;
      }

     
    
      return user;
    } catch (error) {
      console.error("User Bank Details error:", error);
      return Promise.reject(error);
    }
  }

  


    async function depositeRequest (data) {
    try {
      const user = await apiCall("POST", "website/depositReq",data);
  
     
    if (user) {
      return user;
    }
    } catch (error) {
      console.error("User Bank Details error:", error);
      return Promise.reject(error);
    }
  }


  async function saveAccountDetails (data) {
    try {
      const user = await apiCall("POST", "website/saveAccountDetails",data);
  
     
    if (user) {
      return user;
    }
    } catch (error) {
      console.error("User Bank Details error:", error);
      return Promise.reject(error);
    }
  }

  async function getAccountDetailsofClient () {
    try {
      const user = await apiCall("POST", "website/getAccountDetailsOfClient");
  
     
    if (user) {
      return user;
    }
    } catch (error) {
      console.error("User Bank Details error:", error);
      return Promise.reject(error);
    }
  }

  async function getDepositWithdrawList(data) {
    try {
      const user = await apiCall("POST", "website/getDepositWithdrawList", data);
  
      if (user) {
        return user;
      }
    } catch (error) {
      console.error("Account Statement error:", error);
      return Promise.reject(error);
    }
  }

  async function userUpdate (data) {
    try {
      const user = await apiCall("PATCH", "user/userUpdate", data);
  
      if (user) {
        return user;
      }
    } catch (error) {
      console.error("user Update error:", error);
      return Promise.reject(error);
    }
  }
  async function getBetList (data) {
    try {
      const casinoListByCateogeory = await apiCall("POST", "sports/betsList", data);
      if (casinoListByCateogeory) {
        return casinoListByCateogeory;
      }
    } catch (error) {
      console.error("user Update error:", error);
      return Promise.reject(error);
    }
  }
  
  async function withDrawRequest (data) {
    try {
      const user = await apiCall("POST", "website/withdrawReq",data);
  
     
    if (user) {
      return user;
    }
    } catch (error) {
      console.error("User Bank Details error:", error);
      return Promise.reject(error);
    }
  }

  async function uploadScreenShot (data) {
    try {
      const user = await apiCallForm("POST", "website/fileUpload",data);
  
     
    if (user) {
      return user;
    }
    } catch (error) {
      console.error("User Bank Details error:", error);
      return Promise.reject(error);
    }
  }

  async function senOtp (data) {
    try {
      const user = await apiCall("POST", "website/getWhatsAppOtp",data);
  
     
    if (user) {
      return user;
    }
    } catch (error) {
      console.error("User Bank Details error:", error);
      return Promise.reject(error);
    }
  }

  async function ForForgetPassword (data) {
    try {
      const user = await apiCall("POST", "website/userPasswordChangeByMobile",data);
  
     
    if (user) {
      return user;
    }
    } catch (error) {
      console.error("User Bank Details error:", error);
      return Promise.reject(error);
    }
  }


  export const userServices = {
    getUserStatement,
    userUpdate,
    getBetList,
    getUserBalance,
    getBankDetailsByUserId,
    getDomainSettings,
    depositeRequest,
    saveAccountDetails,
    getAccountDetailsofClient,
    withDrawRequest,
    getDepositWithdrawList,
    uploadScreenShot,
    senOtp,
    ForForgetPassword
  }
