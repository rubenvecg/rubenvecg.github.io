import React from 'react';
import styled from 'styled-components';

class Collection extends React.Component {

    constructor(props) {
        super();
        this.state = {
            height: '0px'
        };
    }

    render(){
            const Container = styled.div`
                margin: 0 auto;
                position: relative; 
                padding-top: 50px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                width: 800px;
             `;

            const Title = styled.div`
                position: absolute;
                top: 0px;
                left: 0px;

                & h2{
                    position: absolute;
                    top: 0px;
                    left: 24px;
                    margin: 0;
                    width: 250px;
                    text-align: left;
                }
            `;

            const Arrow = styled.div`
                border-top: 4px solid white;
                border-right: 4px solid white;
                border-radius: 2px;
                width: 12px;
                height: 12px;
                margin-top: 10px;
                transform: rotate(45deg); 
                transition: transform 0.5s;
                -webkit-transition: transform 0.5s; 
            `;

        return ( 
            <Container>
                <Title>
                    <Arrow></Arrow>
                    <h2>{this.props.name}</h2>
                </Title>

                {this.props.children}
            </Container>
        );
    }
    
    
}
 
export default Collection;