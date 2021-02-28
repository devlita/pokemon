import React, { Component } from 'react';
import PokeCard from '../components/PokeCard';
import styled from '@emotion/styled';

class Pokemon extends Component {
    render() {
        return (
            <Container>
                <PokeCard />
            </Container>
        )
    }
}

const Container = styled.div`
  margin-top: 4rem;
`;

export default Pokemon;