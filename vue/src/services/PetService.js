import axios from 'axios';

// const http = axios.create({
//     baseURL: "https://rockville-application.herokuapp.com"
// });

export default {

    findAllPets() {
        return axios.get('/pet/all')
    },

    getPetById(petId) {
        return axios.get(`/pet/${petId}`)
    },

    createPet(pet) {
        return axios.post('/pet/all', pet)
    },

    updatePet(petId, pet) {
        return axios.put(`/pet/${petId}`, pet)
    },

    findAdoptedPets() {
        return axios.get('/pet/all-adopted')
    },

    findAllPhotos(petId) {
        return axios.get(`/pet/pet-photos/${petId}`)
    }
}