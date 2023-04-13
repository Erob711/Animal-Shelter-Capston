
import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default {

    findAllVolunteer() {
        return http.get('/volunteer/all')
    },   
    createVolunteer(volunteerApplication) {
        return http.post('/user/pending-volunteer', volunteerApplication)
    }
}