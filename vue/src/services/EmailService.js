import axios from 'axios';

// const http = axios.create({
//     baseURL: "https://rockville-application.herokuapp.com"
// });

export default {

    sendEmail(email) {
        return axios.post('/sendMail', email)
    }
}