import '../App.css';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/Query';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function PokeCard() {
  const {
    loading,
    error,
    data,
  } = useQuery(GET_POKEMONS, {
    variables: {limit: 20, offset: 0},
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Container>
      {data &&
        data.pokemons.results &&
        data.pokemons.results.map((pokemon) => (
          <Card>
            <div>
              <img 
                src={pokemon.image}
                alt={pokemon.name}/
              >
              <Link 
                to={{
                  pathname: "/pokemon-detail",
                  state: { pokemon: pokemon }
                }}
              >
                {pokemon.name}
              </Link>
              <div>
                Owned: 0
              </div>
            </div>
          </Card>
        ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  width: 8rem;
  background-color: #F8F8F8;
  text-align: center;
  border-radius: 10px;
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #3473AD;
  }
`;

export default PokeCard;