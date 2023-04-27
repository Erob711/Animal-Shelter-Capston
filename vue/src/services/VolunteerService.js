
import axios from 'axios';

// const http = axios.create({
//     baseURL: "https://rockville-application.herokuapp.com"
// });

export default {

    findAllVolunteer() {
        return axios.get('/volunteer/all')
    },   
    createVolunteer(volunteerApplication) {
        return axios.post('/user/pending-volunteer', volunteerApplication)
    },
    updateVolunteer(volunteerApplication) {
        return axios.put('/user/pending-volunteer', volunteerApplication)
    },
    updateVolunteerStatus(volunteer){
        return axios.put('/volunteer/volunteer-pending-list',volunteer)
    },
    findAllPendingVolunteer() {
        return axios.get('/volunteer/pending-volunteer')
    },   
    findVolunteerToPromote() {
        return axios.get('/volunteer/volunteer-to-promote')
    },   

}
