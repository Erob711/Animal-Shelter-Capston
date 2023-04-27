import axios from 'axios';

const http = axios.create({
    baseURL: "https://rockville-application.herokuapp.com/"
});

export default {

    createAdoption(adoption) {
        return http.post('/adoption-form', adoption)
      },

    findAllAdoptions() {
        return http.get('/view-adoptions')
    }
    
}