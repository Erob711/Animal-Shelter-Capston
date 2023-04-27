import axios from 'axios';

// const http = axios.create({
//     baseURL: "https://rockville-application.herokuapp.com"
// });

export default {

    getUserById(userId) {
        return axios.get(`/user/${userId}`)
    },
    updateRoleById(userId, user) {
        return axios.put(`/user/${userId}`, user);
    },
    updateRoleByUsername(username, user) {
        return axios.put(`/user/${username}`, user);
    },
    updateUserByUsername(username, user) {
        return axios.put(`/user/${username}`, user);
    },
    deleteByUsername(username, user) {
        return axios.delete(`/user/${username}`, user);
    },
    updateUserPassword(user) {
        return axios.put('/update-password', user);
    }

    
}