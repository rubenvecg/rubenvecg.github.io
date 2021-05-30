import styled from 'styled-components';

const Photo = (props) => {
    const Container = styled.div`
        width:${props.width}; 
        height:${props.height}; 
        border-radius:${props.radius};
        margin: 40px auto 60px;
        background-image: url(Resources/img/${props.imgSource});
        background-position: center;
        background-size: cover;
    `;

    return(
        <Container></Container>
    );
}

export default Photo;