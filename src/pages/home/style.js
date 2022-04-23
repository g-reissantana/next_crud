import styled from 'styled-components';

export const Container = styled.div`

    width: 100vw;
    min-height: 100vh;

    background: #f2f2f2;
    transition: 0.1s;
    filter: ${props => props.modal ? 'blur(4px)' : 'blur(0)'};

    display: flex;
    align-items: center;
    justify-content: center;
`

export const BoxContact = styled.div`
    width: 80vw;
    max-width: 70rem;

    height: 100%;

    margin: 3rem 0;

    box-shadow: rgb(0 0 0 / 30%) -2px 2px 8px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #fff;
`

export const AddContactBtn = styled.div`
    width: 5.7rem;
    height: 5.7rem;

    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 20;

    margin: 0 5rem 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 3.6rem;
        height: 3.6rem;
    }
    
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 30%) -2px 2px 8px;

    background: rgb(31, 176, 79);

    transition: .3s;
    cursor: pointer;

    :hover {
        filter: brightness(1.2);
        transform: scale(1.1);
    }

`