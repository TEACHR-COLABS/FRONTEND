import axios from 'axios';

export const axiosWithAuth = () => {
    let user = JSON.parse(window.localStorage.getItem('user'));
    let id = user.id;
    let token = user.token;

    console.log('got to axiosWithAuth');
    return axios.create({
        // baseURL: `https://teachr-back-end.herokuapp.com/api/users/${id}`,
        baseURL: `http://localhost:8000/api/users/${id}`,
        headers: {
            Authorization: token,
        },
    });
};