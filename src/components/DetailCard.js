import '../App.css';
import React, { useState }from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';
import { GET_POKEMON } from '../graphql/Query';
import { Storage } from '../storage/indexedDB';

function DetailCard(result) { 
  const current = result.pokemon;
  const pokemonName = current.pokemon.name;

  const { loading, data, error } = useQuery(
    GET_POKEMON,
    {
      variables: { name: pokemonName },
    }
  );

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message} ${pokemonName}`;

  return (
    <Container>
      <Description>
        <Sprite
          src={data.pokemon.sprites.front_default} 
          alt={data.pokemon.name}
        />

        <Name>
            {data.pokemon.name}
        </Name>

        <CatchBtn
          onClick={handleCatchPoke}
          key={data.pokemon.id}
        >
          Catch!
        </CatchBtn>
      </Description>

      <Description>
        {data.pokemon.types ? (
          <div className="type">
            <h5>Types:</h5>
            <div className="attributes">
              {data.pokemon.types.map((type) => (
                <div className="round">
                  {type.type.name}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {data.pokemon.abilities ? (
          <div className="type">
            <h5>Abilities:</h5>
            <div className="attributes">
              {data.pokemon.abilities.map((ability) => (
                <div className="round">
                  {ability.ability.name}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {data.pokemon.moves ? (
          <div className="type">
            <h5>Moves:</h5>
            <div className="attributes">
              {data.pokemon.moves.map((move) => (
                <div className="round">
                  {move.move.name}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Description>
    </Container>
  );

  function handleCatchPoke() {
    const pokemon = (data.pokemon);
      pokemon.myPokemonId = uuidv4();
      Storage.catchPoke(data.pokemon);
  }

};



const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Sprite = styled.img`
  width: 360px;
`;

const Name = styled.p`
  font-size: 2rem;
  text-transform: capitalize;
`;

const CatchBtn = styled.button`
  padding: 0.8rem;
  margin-bottom: 3rem;
  cursor: pointer;
  border-radius: 15px;
  border: none;
  outline: none;
  font-weight: 800;
  text-transform:uppercase;
  &: hover {
    background-color: #CC2020;
    color: #F3F3F3;
  }
`;

const Description = styled.div`
  text-align: center;
  .type {
    margin: 2rem;
  }
  .attributes {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: 480px;
  }
  .round {
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #F3F3F3;
    border-radius: 15px;
  }
`;

export default DetailCard;