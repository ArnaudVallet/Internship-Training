import axios from 'axios';
// Check if our env is prod or dev to have base URI for api requests
const dev = process.env.NODE_ENV !== 'production';
const baseURI = dev ? 'http://localhost:1234' : 'https://monsite.com';

export const register = async() => {
    return
}

export const login = async() => {
    return
}

export const logout = async() => {
    const res = await axios.get(`${baseURI}/logout`);
    return res;
};