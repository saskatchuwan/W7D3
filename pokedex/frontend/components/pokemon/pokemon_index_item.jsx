import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => (
  <li>
    <Link to={'/pokemon/' + props.pokemon.id}>{props.pokemon.name}</Link>
    <br />
    <img src={props.pokemon.image_url} width='100px' />
  </li>
);

export default PokemonIndexItem;