import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const api = {

    async getAllContacts() {
        const response = await instance.get('getContacts');
        return response.data;
    },
    async addContact(data) {
        try {
            const res = await instance.post('addContact',data);
        } catch(err) {
            console.error('Recebaa: '+err);
            return false;
        }
    }
    
};



// async allContacts(setAllContacts) {
//     const response = await instance.get('getContacts');
//     setAllContacts(response.data);
//     return response.data;
// },
