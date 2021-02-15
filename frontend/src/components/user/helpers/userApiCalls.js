const { API } = require("../../../backend");

export const getUserPurchaseList = (userId, token) => {
    return fetch(`${API}/orders/user/${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json())
    .catch(err => console.log(err))
};