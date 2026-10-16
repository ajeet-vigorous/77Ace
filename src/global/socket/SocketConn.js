import io from 'socket.io-client';
import { apiCall, baseUrl } from '../../config/HTTP';
import { domainName } from '../../config/Auth';
import { getDecryptedItem, setEncryptedItem } from '../../config/localStoresHide';
import store from '../../../store';
import { getSportMatchList } from '../../redux/reducers/sport_reducer';



let socket = null;

export const initSocket = () => {
    if (!socket) {
        socket = io(baseUrl.SOCKET_URL, {
            transports: ["websocket"],
            reconnection: true,
            reconnectionAttempts: 5, 
            reconnectionDelay: 1000, 
            reconnectionDelayMax: 5000, 
            randomizationFactor: 0.5 
        });

        socket.on('connect', () => {
            console.warn('Socket connected');
            const userID = getDecryptedItem(`user_info_${domainName}`);
            if (userID?.data?.userId) {
                socket.emit('login', {
                    userId: userID.data.userId,
                    token: userID.token,
                });
            }
        });

        socket.on('updateMatchList', () => {
            store.dispatch(getSportMatchList());
        });

        // domain setting localStorage me cache rehti hai - event aaye to taaza la ke save karo
        socket.on('domainSetting', async () => {
            try {
                const response = await apiCall("POST", "website/domainSettingByDomainName", { domainName: domainName });
                if (response?.data) setEncryptedItem("0x02", response.data);
            } catch (e) {
                console.error('domainSetting refresh failed:', e);
            }
        });

        socket.on('disconnect', () => {
            console.warn('Socket disconnected');
        });

        socket.on('reconnect', (attemptNumber) => {
            console.warn(`Socket reconnected after ${attemptNumber} attempts`);
        });

        socket.on('reconnect_attempt', () => {
            console.warn('Attempting to reconnect...');
        });

        socket.on('reconnect_error', (error) => {
            console.error('Reconnection attempt failed:', error);
        });
    }

    return socket;
};

export const getSocket = () => {
    return socket;
};
