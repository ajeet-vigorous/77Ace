import { domainName } from "../../config/Auth";
import { apiCall } from "../../config/HTTP";
import { getDecryptedItem, setEncryptedItem } from "../../config/localStoresHide";

async function login(data) {
  try {
    const user = await apiCall("POST", "user/login", data);

    if (user) {
      setEncryptedItem(`user_info_${domainName}`, (user));
      setEncryptedItem("token", (user?.token))
      setEncryptedItem("0x05", (user?.data?.balance));
      setEncryptedItem("0x06", (user?.data?.betChipsData));
      setEncryptedItem("0x07", (user.data.oneClickBetAmount ? user.data.oneClickBetAmount : 0));
      setEncryptedItem("0x08", (false));
      setEncryptedItem("0x09", ([100, 200, 300]));
      localStorage.setItem('dashboardModalOpen', true);
      return { userinfo: user };
    }
  } catch (error) {
    console.error("Login error:", error);
    return Promise.reject(error);
  }
}

async function updatePassword(data) {
  try {
    const user = await apiCall("PATCH", "user/updateUserPassword", data);
  return user
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject(error);
  }
}

async function register(data) {
  try {
    const user = await apiCall("POST", "website/registerClient", data);
    return user;
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject(error);
  }
}

function logout() {
  localStorage.clear();
  window.location.href("/login")
}


export const authServices = {
  login,
  logout,
  register,
  updatePassword,
};