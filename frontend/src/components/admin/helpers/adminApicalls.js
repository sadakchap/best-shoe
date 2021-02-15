import { API } from '../../../backend';

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    }).then(res => res.json())
    .catch(err => console.log(err));
};

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const getACategory = (categoryId) => {
    return fetch(`${API}/category/${categoryId}`, {
        method: 'GET'
    }).then(res => res.json())
    .catch(err => console.log(err));
}

export const updateCategory = (userId, token, category, categoryId) => {
    return fetch(`${API}/category/${userId}/${categoryId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const removeCategory = (userId, token, categoryId) => {
    return fetch(`${API}/category/${userId}/${categoryId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const addProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const removeProduct = (userId, token, productId) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const getProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method: 'GET'
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const editProduct = (userId, token, productId, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const getAllCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const getOrders = (userId, token) => {
    return fetch(`${API}/order/all/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const getOrdersGrouped = (userId, token) => {
    return fetch(`${API}/orders/grouped/data/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json())
    .catch(err => console.log(err))
};

export const getFilteredProducts = (text) => {
    return fetch(`${API}/products/search?`+ new URLSearchParams({
        q: text
    }), {
        method: 'GET',
    }).then(res => res.json())
    .catch(err => console.log(err))
};