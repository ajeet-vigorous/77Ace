import { apiCall, apiCallForm } from "../../config/HTTP";

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
  
        localStorage.setItem("clientBalance", JSON.stringify(+user?.data?.coins));
        localStorage.setItem('clientExposure', JSON.stringify(+user?.data?.exposure));
        localStorage.setItem('clientProfitLoss', JSON.stringify(+user?.data?.profitLoss));
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
    const clientdomainSetting = JSON.parse(localStorage.getItem('clientdomainSetting'));
    let user;
    try {
      if(clientdomainSetting){
        user = clientdomainSetting;
      }
      else{
        const response = await apiCall("POST", "website/domainSettingByDomainName",data);
        localStorage.setItem('clientdomainSetting', JSON.stringify(response.data));
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
