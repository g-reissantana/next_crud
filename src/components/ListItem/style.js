import styled from 'styled-components';

export const Container = styled.div`

    width: 90%;
    height: 10rem;

    margin: 0 auto 1rem auto;

    display: flex;
    align-items: center;

    color: rgba(0,0,0, .8);
    background-color: #fff;

    border-radius: 1rem;

`

export const Info = styled.div`
    flex: 4;

    display: flex;
`

export const Texts = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .7rem;

    color: rgba(0,0,0,.8);

    h1 {
        font-size: 2.3rem;
        font-weight: 500;
        letter-spacing: .5px;
        text-transform: capitalize;
    }

    p {
        font-size: 1.3rem;
    }
`


export const Actions = styled.div`
    flex: 1;

    /* background-color: green; */
    width: 4rem;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    a {
        color: none;
    }

    svg {
        cursor: pointer;
        transition: .3s;
        color: rgba(0,0,0, .8);

        :hover {
            transform: scale(1.2);
        }

        &.enter {
            width: 4rem;
            height: 4rem;


            &:hover {
                color: #0A66C2;
            }
        }
    
        &.delete {
            width: 3rem;
            height: 3rem;


            &:hover {
                color: red;
            }
        }
    }

`

export const Line = styled.hr`

   
    :not(:last-child) {
        height: .5px;
        width: 90%;
    }
`