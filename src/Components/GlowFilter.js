import styled from 'styled-components';

const GlowFilter = (props) => {
    const Container = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: #011a25;
        opacity: 0.8;
    `;

    return (<Container></Container>);
}

export default GlowFilter;