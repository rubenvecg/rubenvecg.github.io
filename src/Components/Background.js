import styled from 'styled-components';

const Background = (props) => {
    const Container = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        background-image: url(Resources/img/${props.bgSource});
        background-size: cover;
        background-position: center;
    `;

    return (<Container></Container>);
}

export default Background;