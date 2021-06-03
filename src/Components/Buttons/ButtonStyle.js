import styled from 'styled-components'

export const Bar = styled.span.attrs(props => ({}))`
    width: ${props => props.width}px;
    border-top: 5px solid #aaa;
    border-radius: 5px;
    position: absolute;
    top: ${props => props.y}px;
    right: ${props => props.x}px;
    transform: rotate(${props => props.angle}deg);
    transition: border-top 0.5s;
`
export const ButtonContainer = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    cursor: pointer;

    &:hover > span{        
        border-top: 5px solid white;
    }

`
export const Close = styled(ButtonContainer)`    
    top: 5px;
    right: 5px;
`
export const Right = styled(ButtonContainer)`
    right: 5px;
`
export const Left = styled(ButtonContainer)`
    left: 5px;
`