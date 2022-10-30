import { proxy, useSnapshot } from 'valtio'

const userName = proxy({ 'userName': '' });

export const getUserName = function () {
	return userName.userName;
}

export const setUserName = (name) => {
	userName.userName = name;
}

export const useUserName = () => useSnapshot(userName);