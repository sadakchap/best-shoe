import { API } from '../../../backend';

export const signup = (user) => {
    return fetch(`${API}/signup`, {
        method:'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json());
};

export const confirmEmail = (token) => {
    return fetch(`${API}/email/verify`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
    }).then(res => res.json())
};

export const signin = (user) => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
};

export const setLocalStorage = (key, value) => {
    if(typeof window !== undefined){
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export const authenticate = (data, next) => {
    setLocalStorage("jwt", data);
    next();
};

export const isAuth = () => {
    if(typeof window !== undefined){
        if(localStorage.getItem("jwt") !== "undefined"){
            return JSON.parse(localStorage.getItem("jwt"))
        }
    }
    return false;
};

export const signout = next => {
    if(typeof window !== undefined){
        localStorage.removeItem("jwt");
        localStorage.removeItem("cart");
        next();
        return fetch(`${API}/signout`, {
            method: 'GET'
        }).then(res => console.log('signout success'))
        .catch(err => console.log(err));
    }
};