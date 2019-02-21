import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    //FUNCTIONALLY EQUIVALENT!
    // const {pokemon} = this.props; 
    // const pokemon = this.props.pokemon;
    return (
      <ul>
       { this.props.pokemon.map(poke => (
          <li key={poke.id}>
            { poke.name } 
            <img src={poke.image_url} width='100px' />
          </li>
          
        ))}
      </ul>
    )
  }
}

export default PokemonIndex;