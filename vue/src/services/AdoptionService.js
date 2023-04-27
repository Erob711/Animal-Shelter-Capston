import axios from 'axios';

// const http = axios.create({
//     baseURL: "https://rockville-application.herokuapp.com/"
// });

export default {

    createAdoption(adoption) {
        return axios.post('/adoption-form', adoption)
      },

    findAllAdoptions() {
        return axios.get('/view-adoptions')
    }
    
}