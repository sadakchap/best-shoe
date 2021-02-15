const { API } = require("../../../backend");

export const createOrder = (userId, token, order) => {
    return fetch(`${API}/order/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order})
    }).then(res => res.json())
    .catch(err => console.log(err))
};
