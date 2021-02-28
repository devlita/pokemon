import '../App.css';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/Query';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

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
            <Link 
                to={{
                  pathname: "/pokemon-detail",
                  state: { pokemon: pokemon }
                }}
              >
              <img 
                src={pokemon.image}
                alt={pokemon.name}
              />
              <p>
                {pokemon.name}
              </p>
              <div>
                Owned: 0
              </div>
            </Link> 
          </Card>   
        ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  width: 12rem;
  background-color: #F8F8F8;
  text-align: center;
  border-radius: 10px;
  
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #303030;
  }

  p {
    text-transform: capitalize;
  }

  @media screen and (max-width: 960px) {
    margin: 0.5rem;
    padding: 0.5rem;
    width: 8rem;
    a {
      font-size: 1rem;
    }
  }
`;

export default PokeCard;