import axios from 'axios';
// const baseURL = process.env.baseURL ? process.env.baseURL : null;

//=================================
//             Users
//=================================

export const test = async() => {
    let req = await axios.get('http://localhost:1234/');
    let res = req.data;
    console.log(res);
    return res;
}