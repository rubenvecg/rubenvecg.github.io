import styled from 'styled-components'

export const Container = styled.div`
    color: #e6e6ea;
    margin: 0 auto;
    position: relative;

    width: calc(100%/2);
    height: 250px;
    
    overflow: hidden;

    & h4{
        margin: 10px;
    }  

    &:hover .bg{
        height: 0px;
    }

    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`

export const Background = styled.div.attrs(props => ({
}))`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-position: 50% 0; 
    background-repeat: no-repeat;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
`

export const Link = styled.div`
    width: 100%;
    height: 100%;
    -webkit-transition: background 0.5s, opacity 0.5s;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    &:hover{
        background: hsla(0, 0%, 13%, 0);
    }
`;

export const Title = styled.h3`
    padding: 10px;
    color: tomato; 
    font-size: 24px;       
    font-weight: normal;
`;

export const Text = styled.p`
    text-align: justify; 
    margin-bottom: 0px; 
    margin-top: 5px;
    font-size: 14px;  
    
    & b{
        color: tomato;
    }
`;          

export const DescriptionWindow = styled.div`
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 13%, 0.5);
    z-index: 2;
    position: fixed;  
    top: 0;
    left: 0; 
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`; 

export const DescriptionPanel = styled.div`
    background: #222;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: auto;
    padding: 20px 30px 5px 30px;
    position: relative;
`

export const IconCont = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;   

    & .made-with{
       margin: 0;
    }
`