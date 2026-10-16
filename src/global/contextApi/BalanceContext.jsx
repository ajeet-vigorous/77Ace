
import React, { createContext, useState, useEffect, useContext } from 'react';

import { domainName } from '../../config/Auth';
import { getSocket, initSocket } from '../socket/SocketConn';
import { getDecryptedItem, setEncryptedItem } from "../../config/localStoresHide";


const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState({
    coins: getDecryptedItem("0x14") || "",
    exposure: getDecryptedItem("0x15") || ""
  });


  useEffect(() => {
    
    function updateSocket() {
      let userID = getDecryptedItem(`user_info_${domainName}`);
      let token_Id = userID?.token;
      let socket = getSocket();

      if (!socket || socket == null) {
        socket = initSocket(token_Id);
      }
     
      socket.on("coinUpdate", (data) => {
        setEncryptedItem("0x14", (data.coins));
        setEncryptedItem("0x15", (data.exposure));
        // header / my account 0x05 / 0x11 padhte hain - live value wahan bhi
        setEncryptedItem("0x05", (data.coins));
        setEncryptedItem("0x11", (data.exposure));
        setBalance({
          coins: data.coins,
          exposure: data.exposure,
        });
      });

    }
    updateSocket();
  }, []);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  return useContext(BalanceContext);
};
