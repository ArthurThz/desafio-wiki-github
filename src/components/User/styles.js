import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    padding:2em;

    display:flex;
    align-items:center;
    margin:1em 0;
`


export const Column = styled.div`
    display:flex;
    flex-direction:column;
    flex:${({flex}) => flex}
`

export const Row = styled.div`
    display:flex;

    h1,p{
        color:#ffff;
    }

    h1{
        font-size:2.5em;
    }

    p{
        font-size:1.4em;
    }
`
export const UserIcon = styled.div`

    width:200px;
    height:200px;

    border:none;
   
    img{
        height:100%;
        width:100%;

        border-radius:300px;
        
    }

`

