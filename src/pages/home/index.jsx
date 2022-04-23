import React, { useEffect, useState } from 'react';

// Styles
import * as C from './style';
import { GlobalStyle } from '../../globalStyles';

// Components
import { ListItem } from '../../components/ListItem';

// Icons
import { IoMdAdd } from 'react-icons/io'
import { AddModal } from '../../components/AddModal';
import { homeController } from './homeController';


export const Home = () => {

    const [allContacts, setAllContacts] = useState([]);
    const [showAddModal, setshowAddModal] = useState(false);

    useEffect(() => {
        
        homeController.getAllContacts(setAllContacts);

    }, []);

    function addContact(inputValues) {
        const newContact = homeController.addContacts(inputValues);
        const maxId = allContacts.reduce((prev, current) => {
            return (prev.id > current.id) ? prev : current;
        })
        newContact.id = maxId + 1;
        let newList = [...allContacts];
        newList.push(newContact);
        setAllContacts(newList);
    }

    function listContacts() {
        const list = allContacts.map(item => {
            return (
                <ListItem 
                    key={item.id} 
                    id={item.id}
                    name={item.name} 
                    phone={item.phone} 
                    email = {item.email}
                    instagram = {item.instagram}
                    github = {item.github}
                />
            )
        })
        
        return list;
    }

    return(
        <>
            <GlobalStyle/>
            <AddModal addContact={addContact} showAddModal={showAddModal} setshowAddModal={setshowAddModal} />
            <C.Container modal={showAddModal}>
                { allContacts && 
                    <C.BoxContact>
                        {listContacts()}
                    </C.BoxContact>
                }
            </C.Container>
            <C.AddContactBtn onClick={() => setshowAddModal(!showAddModal)}>
                <IoMdAdd color='#fff'/>
            </C.AddContactBtn>
        </>
    )
}