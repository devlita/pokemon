import React, { Component } from 'react';
import styled from '@emotion/styled';

class MyPokemon extends Component {
    render() {
        return (
            <Container>
                <h1>
                    My Pokemon
                </h1>
            </Container>
        )
    }
}

const Container = styled.div`
  margin-top: 4rem;
`;

export default MyPokemon;