import Axios from "axios";

const url = {
    accountList : `${process.env.BASE_API_URL}/account-list`,
    transfer: `${process.env.BASE_API_URL}/transfer`,
}

export const getAccountList = ( ) => Axios.get(url.accountList).then(({ data }) => data);

export const sendDataTransfer = (transferData) => {
    return Axios.post(url.transfer, transferData)
        .then((result) => result.data); 
};

