import styled from 'styled-components'

const ButtonContainer = styled.div`
    
`
const Button = ({children, onClick}) => {
    return (
        <ButtonContainer><h3>{children}</h3></ButtonContainer>
    );
}
 
export default Button;
