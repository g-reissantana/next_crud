import { api } from '../../services/api';

export const homeController = {
    
    async getAllContacts(setAllContacts) {
        const response = api.getAllContacts();
        setAllContacts(response);
        return response;
    },
    async addContacts(inputValues) {

    }

};