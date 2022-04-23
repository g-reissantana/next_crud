import React, { useEffect, useState } from 'react';
import * as Contact from './style';

import { MdOutlineReadMore } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ContactsModal } from '../ContactsModal';
import { Avatar } from '../Avatar';

export const ListItem = (contact) => {

    
    useEffect(() => {
        maskPhone();
    })

    const [showModalContacts, setShowModalContacts] = useState(false);

    function maskPhone() {
        const phone = contact.phone;
        const ddd = phone.slice(0,2);
        const nineDigit = phone.slice(2,3);
        const firstPart = phone.slice(3,7);
        const lastPart = phone.slice(7,11);
        
        return `(${ddd}) ${nineDigit} ${firstPart}-${lastPart}`;
    };

    return(
        <>
            <ContactsModal contact={contact} showModalContacts={showModalContacts} setShowModalContacts={setShowModalContacts}/>
            <Contact.Container>
                <Contact.Info>
                    <Avatar  width='6.8rem' height='6.8rem' src={'https://github.com/g-reissantana.png'}/>
                    <Contact.Texts>
                        <h1>{contact.name}</h1>
                        <p>{maskPhone()}</p>
                    </Contact.Texts>
                </Contact.Info>
                
                <Contact.Actions>
                    <MdOutlineReadMore onClick={() => setShowModalContacts(!showModalContacts)} title="Ver Contato" className="enter"/>
                    <MdOutlineDelete title="Apagar Contato" className="delete"/>
                </Contact.Actions>
            </Contact.Container>
            <Contact.Line />
        </>
    )
};