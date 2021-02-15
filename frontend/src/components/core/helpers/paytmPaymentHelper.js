const { API } = require("../../../backend");

export const initiateTransaction = (userId, token, totalAmount) => {
    return fetch(`${API}/payment/gettoken/${userId}?amount=${totalAmount}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then( res => res.json())
    .catch(err => console.log(err))
};