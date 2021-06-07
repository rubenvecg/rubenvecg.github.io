import styled from 'styled-components'

export const DeckContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`

export const Slides = styled.div`
    width: 100%;
    height: 40vh;
    overflow: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
`

export const SlideCont = styled.div.attrs(props => ({}))`
    width: 100%;
    height: 40vh;
    display: inline-block;
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
