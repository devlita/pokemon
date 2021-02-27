import React, { Component } from 'react';
import PokeCard from '../components/PokeCard';
import styled from 'styled-components';

class Pokemon extends Component {
    render() {
        return (
            <Container>
                <h1>
                    Pokemon List
                </h1>
                <PokeCard />
            </Container>
        )
    }
}

const Container = styled.div`
  margin-top: 4rem;
`;

export default Pokemon;