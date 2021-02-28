import React, { Component } from 'react';
import styled from '@emotion/styled';
import DetailCard from '../components/DetailCard';

class MyPokemon extends Component {
    constructor(props) {
        super(props);
    
        this.state = { data: props.location.state };
      }

    render() {
        const pokemon = this.state.data;

        return (
            <Container>
                <DetailCard pokemon={pokemon} />
            </Container>
        )
    }
}

const Container = styled.div`
  margin-top: 4rem;
`;

export default MyPokemon;