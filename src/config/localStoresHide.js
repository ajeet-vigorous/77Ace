import CryptoJS from "crypto-js";

const SECRET_KEY = "vigo-ajeet";

function encryptData(data) {
  if (data === null || data === undefined) return null;

  const payload =
    typeof data === "string"
      ? data
      : JSON.stringify(data);

  return CryptoJS.AES.encrypt(payload, SECRET_KEY).toString();
}

function decryptData(encryptedData) {
  if (!encryptedData) return null;

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    try {
      return JSON.parse(decryptedText);
    } catch {
      return decryptedText;
    }
  } catch (error) {
    console.error("Decryption failed", error);
    return null;
  }
}

export function setEncryptedItem(key, value) {
  const encryptedValue = encryptData(value);
  localStorage.setItem(key, encryptedValue);
}

export function getDecryptedItem(key) {
  const encryptedValue = localStorage.getItem(key);
  return decryptData(encryptedValue);
}
